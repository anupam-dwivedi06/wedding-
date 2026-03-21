import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiRefreshCw, FiMapPin, FiPhone, FiMail } from "react-icons/fi";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInquiries = async (isMountedRef = { current: true }) => {
    setLoading(true);
    setError(null);

    try {
      const resp = await axios.get(
        "https://wedding-backend-azure.vercel.app/api/form",
        { timeout: 5000 }
      );

      if (isMountedRef.current) {
        const data = Array.isArray(resp.data) ? resp.data : [];
        const sorted = data.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        setInquiries(sorted);
      }
    } catch (err) {
      if (isMountedRef.current) {
        setError("Connection failed.");
      }
    } finally {
      if (isMountedRef.current) setLoading(false);
    }
  };

  useEffect(() => {
    const isMountedRef = { current: true };
    fetchInquiries(isMountedRef);
    return () => (isMountedRef.current = false);
  }, []);

  return (
    <div className="container">
      <div className="wrapper">

        <div className="header">
          <div>
            <h1 className="title">Admin Dashboard</h1>
            <p className="subtitle">Manage your inquiries</p>
          </div>

          <button className="button" onClick={() => fetchInquiries()}>
            <FiRefreshCw /> Refresh
          </button>
        </div>

        {error && <div className="error">⚠️ {error}</div>}

        <div className="card">

          {loading ? (
            <div className="loader">
              <div className="spinner"></div>
              <p>Loading Leads...</p>
            </div>
          ) : inquiries.length === 0 ? (
            <div className="loader">
              <p>No inquiries found.</p>
            </div>
          ) : (
            inquiries.map((inq, index) => (
              <div key={inq._id || index} className="inquiry">
                <div className="row">

                  <div className="profile">
                    <div className="avatar">
                      {inq.name?.charAt(0) || "?"}
                    </div>

                    <div>
                      <h3>{inq.name || "Unknown Client"}</h3>
                      <p><FiMail /> {inq.email || "No email"}</p>
                    </div>
                  </div>

                  <div className="details">
                    <div>
                      <p className="label">Event</p>
                      <p className="value">{inq.event || "N/A"}</p>
                    </div>

                    <div>
                      <p className="label">Location</p>
                      <p className="value">
                        <FiMapPin /> {inq.location || "N/A"}
                      </p>
                    </div>

                    <div>
                      <p className="label">Contact</p>
                      <p className="value">
                        <FiPhone /> {inq.phoneWhatsApp || "N/A"}
                      </p>
                    </div>
                  </div>

                  <div className="date">
                    <p>
                      {inq.date
                        ? new Date(inq.date).toLocaleDateString()
                        : "TBD"}
                    </p>
                    <p className="small">
                      Received{" "}
                      {inq.createdAt
                        ? new Date(inq.createdAt).toLocaleDateString()
                        : ""}
                    </p>
                  </div>

                </div>
              </div>
            ))
          )}

        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;