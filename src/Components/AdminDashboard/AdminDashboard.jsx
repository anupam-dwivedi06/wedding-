
import React, { useEffect, useState } from "react";
import axios from "axios";
import { FiRefreshCw, FiMapPin, FiPhone, FiMail } from "react-icons/fi";

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchInquiries = async () => {
    setLoading(true);
    setError(null);

    try {
      const resp = await axios.get("/api/inquiries");
      setInquiries(Array.isArray(resp.data) ? resp.data : []);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Connection failed. Please check your backend.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 flex justify-center">
      <div className="w-full max-w-6xl px-4 md:px-8 py-10">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-10">
          <div>
            <h1 className="text-3xl md:text-4xl font-black">Admin Dashboard</h1>
            <p className="text-slate-500 text-sm">Manage your inquiries</p>
          </div>

          <button
            onClick={fetchInquiries}
            className="bg-blue-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow hover:bg-blue-700 transition flex items-center gap-2 w-fit"
          >
            <FiRefreshCw className={loading ? "animate-spin" : ""} />
            Refresh
          </button>
        </div>

        {/* Error */}
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl mb-6">
            ⚠️ {error}
          </div>
        )}

        {/* Content Container */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border">

          {/* Loading */}
          {loading ? (
            <div className="text-center py-16">
              <div className="inline-block w-10 h-10 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
              <p className="mt-4 text-slate-400 text-sm">Loading Leads...</p>
            </div>
          ) : (
            <div className="grid gap-6">

              {inquiries.length === 0 ? (
                <div className="text-center py-16 border-2 border-dashed rounded-xl">
                  <p className="text-slate-400">No inquiries found.</p>
                </div>
              ) : (
                inquiries.map((inq) => (
                  <div
                    key={inq._id}
                    className="p-5 md:p-6 rounded-xl border hover:shadow-md transition"
                  >

                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                      {/* Client Info */}
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center text-xl font-bold">
                          {inq.name ? inq.name.charAt(0) : "?"}
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-slate-900">
                            {inq.name || "Unknown Client"}
                          </h3>

                          <p className="flex items-center gap-2 text-sm text-slate-500">
                            <FiMail /> {inq.email || "No email"}
                          </p>
                        </div>
                      </div>

                      {/* Details */}
                      <div className="grid grid-cols-2 md:flex md:gap-10 gap-y-4 text-sm">

                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold">
                            Event
                          </p>
                          <p className="font-semibold text-blue-600">
                            {inq.event || "N/A"}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold">
                            Location
                          </p>
                          <p className="flex items-center gap-1 font-semibold">
                            <FiMapPin className="text-slate-400" />
                            {inq.location || "N/A"}
                          </p>
                        </div>

                        <div>
                          <p className="text-xs text-slate-400 uppercase font-bold">
                            Contact
                          </p>
                          <p className="flex items-center gap-1 font-semibold">
                            <FiPhone className="text-slate-400" />
                            {inq.phoneWhatsApp || "N/A"}
                          </p>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="md:text-right text-sm border-t md:border-none pt-3 md:pt-0">
                        <p className="font-bold text-slate-900">
                          {inq.date
                            ? new Date(inq.date).toLocaleDateString()
                            : "TBD"}
                        </p>

                        <p className="text-xs text-slate-400">
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
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;

