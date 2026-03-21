import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { FiRefreshCw, FiMapPin, FiPhone, FiMail, FiCalendar, FiUser } from "react-icons/fi";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const isMounted = useRef(true);

  const fetchInquiries = async () => {
    setLoading(true);
    setError(null);

    try {
      const resp = await axios.get(
        "https://wedding-backend-azure.vercel.app/api/form",
        { timeout: 8000 }
      );

      if (isMounted.current) {
        const data = Array.isArray(resp.data) ? resp.data : [];
        const sorted = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setInquiries(sorted);
      }
    } catch (err) {
      if (isMounted.current) {
        setError("Unable to connect to the server. Please try again later.");
      }
    } finally {
      if (isMounted.current) setLoading(false);
    }
  };

  useEffect(() => {
    isMounted.current = true;
    fetchInquiries();
    return () => { isMounted.current = false; };
  }, []);

  return (
    <div className="dashboard-container">
      <div className="dashboard-wrapper">
        
        {/* Header Section */}
        <header className="dashboard-header">
          <div className="header-text">
            <h1 className="main-title">Inquiry Management</h1>
            <p className="sub-title">You have {inquiries.length} total leads</p>
          </div>
          <button 
            className={`refresh-btn ${loading ? "spinning" : ""}`} 
            onClick={fetchInquiries}
            disabled={loading}
          >
            <FiRefreshCw /> {loading ? "Updating..." : "Refresh Feed"}
          </button>
        </header>

        {/* Error State */}
        {error && (
          <div className="error-banner">
            <span className="error-icon">!</span>
            {error}
          </div>
        )}

        {/* Main Content Area */}
        <div className="content-card">
          {loading ? (
            <div className="loading-state">
              <div className="pulse-loader"></div>
              <p>Fetching latest inquiries...</p>
            </div>
          ) : inquiries.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📂</div>
              <p>No inquiries found in the database.</p>
            </div>
          ) : (
            <div className="inquiry-list">
              {inquiries.map((inq, index) => (
                <div key={inq._id || index} className="inquiry-item">
                  <div className="inquiry-grid">
                    
                    {/* User Profile Info */}
                    <div className="col-profile">
                      <div className="avatar-circle">
                        {inq.name ? inq.name.charAt(0).toUpperCase() : <FiUser />}
                      </div>
                      <div className="user-info">
                        <h3>{inq.name || "Anonymous Client"}</h3>
                        <a href={`mailto:${inq.email}`} className="contact-link">
                          <FiMail /> {inq.email || "No email"}
                        </a>
                      </div>
                    </div>

                    {/* Event Details */}
                    <div className="col-details">
                      <div className="detail-group">
                        <span className="detail-label">Event Type</span>
                        <span className="detail-value highlight">{inq.event || "General"}</span>
                      </div>
                      <div className="detail-group">
                        <span className="detail-label">Location</span>
                        <span className="detail-value">
                          <FiMapPin className="icon-inline" /> {inq.location || "Not specified"}
                        </span>
                      </div>
                    </div>

                    {/* Contact Stats */}
                    <div className="col-contact">
                      <div className="detail-group">
                        <span className="detail-label">Phone / WhatsApp</span>
                        <span className="detail-value">
                          <FiPhone className="icon-inline" /> {inq.phoneWhatsApp || "N/A"}
                        </span>
                      </div>
                    </div>

                    {/* Date Information */}
                    <div className="col-date">
                      <div className="event-date-badge">
                        <FiCalendar />
                        {inq.date ? new Date(inq.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }) : "TBD"}
                      </div>
                      <span className="timestamp">
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