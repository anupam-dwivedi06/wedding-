import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { 
  FiRefreshCw, 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiCalendar, 
  FiUser, 
  FiUserCheck, 
  FiInbox,
  FiLogOut 
} from "react-icons/fi";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);
  const navigate = useNavigate();

  // Determine API URL based on environment
  const API_URL = window.location.hostname === 'localhost' 
    ? "http://localhost:5000/api/form" 
    : "https://wedding-backend-azure.vercel.app/api/form";

  const fetchInquiries = async () => {
    setLoading(true);
    setError(null);

    const token = localStorage.getItem('adminToken');

    if (!token) {
      setError("No session found. Redirecting...");
      setTimeout(() => navigate("/login"), 2000);
      return;
    }

    try {
      const resp = await axios.get(API_URL, { 
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        timeout: 10000 // Extended timeout for cold-starts on Vercel
      });

      if (isMounted.current) {
        const data = Array.isArray(resp.data) ? resp.data : [];
        // Sort by newest first (Safety check even if backend handles it)
        const sorted = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setInquiries(sorted);
      }
    } catch (err) {
      console.error("Fetch Error Details:", err);
      if (isMounted.current) {
        if (err.response && (err.response.status === 401 || err.response.status === 403)) {
          setError("Session expired or invalid. Please login again.");
          localStorage.removeItem('adminToken');
          setTimeout(() => navigate("/login"), 3000);
        } else if (err.code === 'ECONNABORTED') {
          setError("Request timed out. Please refresh.");
        } else {
          setError("Unable to connect to database. Is the backend live?");
        }
      }
    } finally {
      if (isMounted.current) setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate("/login");
  };

  // --- CRITICAL: This triggers the fetch on component load ---
  useEffect(() => {
    isMounted.current = true;
    fetchInquiries();
    
    // Cleanup function to prevent setting state on unmounted component
    return () => { isMounted.current = false; };
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        
        {/* Header Section */}
        <header className="dashboard-header">
          <div className="header-text">
            <h1 className="main-title">Admin Dashboard</h1>
            <p className="sub-title">Managing {inquiries.length} customer inquiries</p>
          </div>
          <div className="header-actions">
            <button 
              className={`refresh-btn ${loading ? "spinning" : ""}`} 
              onClick={fetchInquiries}
              disabled={loading}
            >
              <FiRefreshCw /> {loading ? "Updating..." : "Refresh Feed"}
            </button>
            <button className="logout-btn" onClick={handleLogout}>
              <FiLogOut /> Logout
            </button>
          </div>
        </header>

        {/* Error Notification */}
        {error && (
          <div className="error-banner">
            <span className="error-icon">!</span>
            {error}
          </div>
        )}

        {/* Main Content Card */}
        <div className="content-card">
          {loading && inquiries.length === 0 ? (
            <div className="state-container">
              <div className="pulse-loader"></div>
              <p>Fetching leads...</p>
            </div>
          ) : inquiries.length === 0 ? (
            <div className="state-container">
              <FiInbox size={48} color="#cbd5e1" />
              <p>No inquiries found in the system.</p>
            </div>
          ) : (
            <div className="inquiry-list">
              {inquiries.map((inq, index) => (
                <div key={inq._id || index} className="inquiry-item">
                  <div className="inquiry-grid">
                    
                    {/* Column 1: Profile */}
                    <div className="col-profile">
                      <div className="avatar-box">
                        {inq.name ? inq.name.charAt(0).toUpperCase() : <FiUser />}
                      </div>
                      <div className="user-meta">
                        <h3>{inq.name || "New Client"}</h3>
                        <a href={`mailto:${inq.email}`} className="email-link">
                          <FiMail /> {inq.email || "No email"}
                        </a>
                      </div>
                    </div>

                    {/* Column 2: Event & Referral */}
                    <div className="col-event">
                      <div className="data-group">
                        <span className="label">Event Details</span>
                        <span className="value-highlight">{inq.event || "Unspecified"}</span>
                        <div className="source-tag">
                          <FiUserCheck size={12} /> {inq.referralSource || "Direct Web"}
                        </div>
                      </div>
                    </div>

                    {/* Column 3: Contact & Location */}
                    <div className="col-contact">
                      <div className="data-group">
                        <span className="label">Contact & Location</span>
                        <span className="value-iconic">
                          <FiPhone /> {inq.phoneWhatsApp || "No Phone"}
                        </span>
                        <span className="value-subtext">
                          <FiMapPin /> {inq.location || "N/A"}
                        </span>
                      </div>
                    </div>

                    {/* Column 4: Date Info */}
                    <div className="col-date">
                      <div className="date-badge">
                        <FiCalendar />
                        {inq.date ? new Date(inq.date).toLocaleDateString('en-US', { 
                          month: 'short', day: 'numeric', year: 'numeric' 
                        }) : "TBD"}
                      </div>
                      <span className="received-text">
                        Received: {inq.createdAt ? new Date(inq.createdAt).toLocaleDateString() : "Just now"}
                      </span>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;