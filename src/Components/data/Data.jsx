import React, { useState, useEffect } from "react";
import axios from "axios";

// ── palette ──────────────────────────────────────────────
const C = {
  bg: "#faf7f4",
  card: "#ffffff",
  accent: "#c9ad9f",
  accentDark: "#a8897c",
  text: "#2d2420",
  muted: "#9c8880",
  border: "#ede8e4",
  success: "#6a9e7f",
  row1: "#ffffff",
  row2: "#fdf9f7",
};

const styles = {
  page: {
    minHeight: "100vh",
    backgroundColor: C.bg,
    fontFamily: "'Georgia', 'Times New Roman', serif",
    padding: "0",
  },
  header: {
    background: `linear-gradient(135deg, #2d2420 0%, #4a3530 100%)`,
    padding: "36px 48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: `4px solid ${C.accent}`,
  },
  headerLeft: {
    display: "flex",
    flexDirection: "column",
  },
  headerLabel: {
    fontSize: "0.7rem",
    letterSpacing: "0.25em",
    textTransform: "uppercase",
    color: C.accent,
    marginBottom: "6px",
    fontFamily: "'Georgia', serif",
  },
  headerTitle: {
    fontSize: "clamp(1.4rem, 2.5vw, 2.2rem)",
    fontWeight: "700",
    color: "#fff",
    margin: 0,
    letterSpacing: "-0.02em",
  },
  headerRight: {
    display: "flex",
    gap: "12px",
    alignItems: "center",
  },
  statPill: {
    backgroundColor: "rgba(201,173,159,0.2)",
    border: `1px solid rgba(201,173,159,0.4)`,
    borderRadius: "999px",
    padding: "8px 20px",
    color: "#fff",
    fontSize: "0.85rem",
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },
  statNum: {
    fontWeight: "700",
    color: C.accent,
    fontSize: "1.1rem",
  },
  refreshBtn: {
    backgroundColor: C.accent,
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    padding: "10px 22px",
    fontSize: "0.85rem",
    cursor: "pointer",
    fontFamily: "'Georgia', serif",
    letterSpacing: "0.05em",
    transition: "background 0.2s",
  },
  body: {
    padding: "40px 48px",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  // ── search/filter bar ──
  toolbar: {
    display: "flex",
    gap: "16px",
    marginBottom: "28px",
    flexWrap: "wrap",
    alignItems: "center",
  },
  searchWrap: {
    flex: 1,
    minWidth: "220px",
    position: "relative",
  },
  searchIcon: {
    position: "absolute",
    left: "14px",
    top: "50%",
    transform: "translateY(-50%)",
    color: C.muted,
    fontSize: "1rem",
    pointerEvents: "none",
  },
  searchInput: {
    width: "100%",
    padding: "11px 14px 11px 40px",
    border: `1px solid ${C.border}`,
    borderRadius: "10px",
    fontSize: "0.9rem",
    backgroundColor: C.card,
    color: C.text,
    boxSizing: "border-box",
    outline: "none",
    fontFamily: "'Georgia', serif",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  },
  filterSelect: {
    padding: "11px 16px",
    border: `1px solid ${C.border}`,
    borderRadius: "10px",
    fontSize: "0.9rem",
    backgroundColor: C.card,
    color: C.text,
    outline: "none",
    fontFamily: "'Georgia', serif",
    cursor: "pointer",
    boxShadow: "0 2px 8px rgba(0,0,0,0.04)",
  },
  countLabel: {
    fontSize: "0.85rem",
    color: C.muted,
    fontStyle: "italic",
    whiteSpace: "nowrap",
  },

  // ── table card ──
  tableCard: {
    backgroundColor: C.card,
    borderRadius: "16px",
    boxShadow: "0 4px 24px rgba(0,0,0,0.08)",
    overflow: "hidden",
    border: `1px solid ${C.border}`,
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    fontSize: "0.875rem",
  },
  thead: {
    backgroundColor: "#2d2420",
  },
  th: {
    padding: "14px 20px",
    textAlign: "left",
    fontWeight: "600",
    fontSize: "0.72rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: C.accent,
    fontFamily: "'Georgia', serif",
    whiteSpace: "nowrap",
    cursor: "pointer",
    userSelect: "none",
  },
  td: {
    padding: "14px 20px",
    color: C.text,
    borderBottom: `1px solid ${C.border}`,
    verticalAlign: "middle",
    lineHeight: "1.4",
  },
  tdMuted: {
    color: C.muted,
    fontSize: "0.82rem",
  },
  badge: {
    display: "inline-block",
    padding: "3px 10px",
    borderRadius: "999px",
    fontSize: "0.72rem",
    fontWeight: "600",
    letterSpacing: "0.05em",
    textTransform: "uppercase",
    backgroundColor: "rgba(201,173,159,0.2)",
    color: C.accentDark,
    border: `1px solid rgba(201,173,159,0.4)`,
  },

  // ── empty / loading ──
  centered: {
    textAlign: "center",
    padding: "64px 20px",
    color: C.muted,
  },
  spinner: {
    width: "40px",
    height: "40px",
    border: `3px solid ${C.border}`,
    borderTop: `3px solid ${C.accent}`,
    borderRadius: "50%",
    animation: "spin 0.8s linear infinite",
    margin: "0 auto 16px",
  },
  errorBox: {
    backgroundColor: "#fff0f0",
    border: "1px solid #f5c6cb",
    borderRadius: "10px",
    padding: "20px",
    color: "#721c24",
    textAlign: "center",
    marginBottom: "24px",
  },

  // ── detail modal ──
  overlay: {
    position: "fixed",
    inset: 0,
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
    padding: "20px",
    backdropFilter: "blur(4px)",
  },
  modal: {
    backgroundColor: C.card,
    borderRadius: "20px",
    padding: "40px",
    maxWidth: "560px",
    width: "100%",
    boxShadow: "0 20px 60px rgba(0,0,0,0.2)",
    position: "relative",
    maxHeight: "90vh",
    overflowY: "auto",
  },
  modalClose: {
    position: "absolute",
    top: "16px",
    right: "20px",
    background: "none",
    border: "none",
    fontSize: "1.5rem",
    cursor: "pointer",
    color: C.muted,
    lineHeight: 1,
  },
  modalTitle: {
    fontSize: "1.5rem",
    fontWeight: "700",
    color: C.text,
    marginBottom: "6px",
  },
  modalSubtitle: {
    fontSize: "0.85rem",
    color: C.muted,
    marginBottom: "28px",
  },
  modalGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },
  modalField: {
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  modalLabel: {
    fontSize: "0.68rem",
    letterSpacing: "0.15em",
    textTransform: "uppercase",
    color: C.muted,
    fontWeight: "600",
  },
  modalValue: {
    fontSize: "0.95rem",
    color: C.text,
    fontWeight: "500",
    wordBreak: "break-word",
  },
  modalDivider: {
    height: "1px",
    backgroundColor: C.border,
    margin: "20px 0",
  },
};

// ── helpers ──────────────────────────────────────────────
const referralLabel = (v) => ({
  social_media: "Social Media",
  family_friend: "Family / Friend",
  google_search: "Google Search",
  wedding_vendor: "Wedding Vendor",
  other: "Other",
}[v] || v || "—");

const formatDate = (d) => {
  if (!d) return "—";
  return new Date(d).toLocaleDateString("en-IN", {
    day: "2-digit", month: "short", year: "numeric",
  });
};

const formatDateTime = (d) => {
  if (!d) return "—";
  return new Date(d).toLocaleString("en-IN", {
    day: "2-digit", month: "short", year: "numeric",
    hour: "2-digit", minute: "2-digit",
  });
};

// ── component ─────────────────────────────────────────────
const Data = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [filterRef, setFilterRef] = useState("");
  const [sortField, setSortField] = useState("createdAt");
  const [sortDir, setSortDir] = useState("desc");
  const [selected, setSelected] = useState(null);

  const fetchData = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await axios.get(`https://wedding-backend-azure.vercel.app/api/form`);
      setInquiries(res.data);
    } catch {
      setError("Failed to load inquiries. Make sure your backend is running.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchData(); }, []);

  const handleSort = (field) => {
    if (sortField === field) setSortDir(d => d === "asc" ? "desc" : "asc");
    else { setSortField(field); setSortDir("asc"); }
  };

  const sortArrow = (field) => sortField === field ? (sortDir === "asc" ? " ↑" : " ↓") : "";

  const filtered = inquiries
    .filter(i => {
      const q = search.toLowerCase();
      return (
        i.name?.toLowerCase().includes(q) ||
        i.email?.toLowerCase().includes(q) ||
        i.event?.toLowerCase().includes(q) ||
        i.location?.toLowerCase().includes(q)
      );
    })
    .filter(i => filterRef ? i.referralSource === filterRef : true)
    .sort((a, b) => {
      let av = a[sortField] ?? "", bv = b[sortField] ?? "";
      if (sortField === "createdAt" || sortField === "date") {
        av = new Date(av); bv = new Date(bv);
      }
      return sortDir === "asc" ? (av > bv ? 1 : -1) : (av < bv ? 1 : -1);
    });

  return (
    <div style={styles.page}>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        tr.inquiry-row:hover td { background: #fdf5f2 !important; cursor: pointer; }
      `}</style>

      {/* Header */}
      <div style={styles.header}>
        <div style={styles.headerLeft}>
          <span style={styles.headerLabel}>Shagun Utsav · Admin</span>
          <h1 style={styles.headerTitle}>Inquiry Dashboard</h1>
        </div>
        <div style={styles.headerRight}>
          <div style={styles.statPill}>
            Total <span style={styles.statNum}>{inquiries.length}</span> inquiries
          </div>
          <button
            style={styles.refreshBtn}
            onClick={fetchData}
            onMouseEnter={e => e.target.style.backgroundColor = C.accentDark}
            onMouseLeave={e => e.target.style.backgroundColor = C.accent}
          >
            ↻ Refresh
          </button>
        </div>
      </div>

      <div style={styles.body}>
        {error && <div style={styles.errorBox}>{error}</div>}

        {/* Toolbar */}
        <div style={styles.toolbar}>
          <div style={styles.searchWrap}>
            <span style={styles.searchIcon}>🔍</span>
            <input
              style={styles.searchInput}
              placeholder="Search by name, email, event…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
          </div>
          <select
            style={styles.filterSelect}
            value={filterRef}
            onChange={e => setFilterRef(e.target.value)}
          >
            <option value="">All Sources</option>
            <option value="social_media">Social Media</option>
            <option value="family_friend">Family / Friend</option>
            <option value="google_search">Google Search</option>
            <option value="wedding_vendor">Wedding Vendor</option>
            <option value="other">Other</option>
          </select>
          <span style={styles.countLabel}>
            Showing {filtered.length} of {inquiries.length}
          </span>
        </div>

        {/* Table */}
        <div style={styles.tableCard}>
          {loading ? (
            <div style={styles.centered}>
              <div style={styles.spinner} />
              <p>Loading inquiries…</p>
            </div>
          ) : filtered.length === 0 ? (
            <div style={styles.centered}>
              <p style={{ fontSize: "2rem", marginBottom: "8px" }}>🕊️</p>
              <p>No inquiries found.</p>
            </div>
          ) : (
            <table style={styles.table}>
              <thead style={styles.thead}>
                <tr>
                  {[
                    { label: "Name", field: "name" },
                    { label: "Email", field: "email" },
                    { label: "Phone", field: "phoneWhatsApp" },
                    { label: "Event", field: "event" },
                    { label: "Location", field: "location" },
                    { label: "Event Date", field: "date" },
                    { label: "Source", field: "referralSource" },
                    { label: "Submitted", field: "createdAt" },
                  ].map(col => (
                    <th
                      key={col.field}
                      style={styles.th}
                      onClick={() => handleSort(col.field)}
                    >
                      {col.label}{sortArrow(col.field)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((inq, idx) => (
                  <tr
                    key={inq._id}
                    className="inquiry-row"
                    onClick={() => setSelected(inq)}
                  >
                    <td style={{ ...styles.td, fontWeight: "600" }}>{inq.name || "—"}</td>
                    <td style={{ ...styles.td, ...styles.tdMuted }}>{inq.email || "—"}</td>
                    <td style={{ ...styles.td, ...styles.tdMuted }}>{inq.phoneWhatsApp || "—"}</td>
                    <td style={styles.td}>{inq.event || "—"}</td>
                    <td style={{ ...styles.td, ...styles.tdMuted }}>{inq.location || "—"}</td>
                    <td style={{ ...styles.td, ...styles.tdMuted }}>{formatDate(inq.date)}</td>
                    <td style={styles.td}>
                      <span style={styles.badge}>{referralLabel(inq.referralSource)}</span>
                    </td>
                    <td style={{ ...styles.td, ...styles.tdMuted }}>{formatDateTime(inq.createdAt)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      {/* Detail Modal */}
      {selected && (
        <div style={styles.overlay} onClick={() => setSelected(null)}>
          <div style={styles.modal} onClick={e => e.stopPropagation()}>
            <button style={styles.modalClose} onClick={() => setSelected(null)}>×</button>
            <div style={styles.modalTitle}>{selected.name}</div>
            <div style={styles.modalSubtitle}>Submitted on {formatDateTime(selected.createdAt)}</div>

            <div style={styles.modalGrid}>
              <div style={styles.modalField}>
                <span style={styles.modalLabel}>Email</span>
                <span style={styles.modalValue}>{selected.email || "—"}</span>
              </div>
              <div style={styles.modalField}>
                <span style={styles.modalLabel}>Phone / WhatsApp</span>
                <span style={styles.modalValue}>{selected.phoneWhatsApp || "—"}</span>
              </div>
              <div style={styles.modalField}>
                <span style={styles.modalLabel}>Event</span>
                <span style={styles.modalValue}>{selected.event || "—"}</span>
              </div>
              <div style={styles.modalField}>
                <span style={styles.modalLabel}>Event Date</span>
                <span style={styles.modalValue}>{formatDate(selected.date)}</span>
              </div>
              <div style={{ ...styles.modalField, gridColumn: "1 / -1" }}>
                <span style={styles.modalLabel}>Location</span>
                <span style={styles.modalValue}>{selected.location || "—"}</span>
              </div>
              <div style={{ ...styles.modalField, gridColumn: "1 / -1" }}>
                <span style={styles.modalLabel}>How they found us</span>
                <span style={styles.modalValue}>{referralLabel(selected.referralSource)}</span>
              </div>
            </div>

            <div style={styles.modalDivider} />
            <div style={{ fontSize: "0.78rem", color: C.muted }}>
              ID: {selected._id}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Data;
