import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const MAP_SRC =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.8445359930465!2d74.76199179999999!3d22.208013700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3961ed9410de8dcd%3A0xea7be4ead427b739!2sUtsav%20Studio%20%26%20Graphics!5e0!3m2!1sen!2sin!4v1748750782018!5m2!1sen!2sin";

// Standard mobile breakpoint
const MOBILE_BREAKPOINT = 768;

// Styles object using standard CSS properties for React's style attribute
const styles = {
  // Overall page container.
  appContainer: {
    fontFamily: "Inter, sans-serif",
    width: "100%",
    margin: "0",
    padding: "0",
    marginTop: "1vw",
  },
  // Main component card, now acting as the full-width footer content bar
  mainCard: {
    display: "flex",
    flexWrap: "wrap",
    backgroundColor: "#473e3a", // Dark brown/olive color from the image
    color: "#f0f0f0", // Off-white text color
    borderRadius: "0",
    boxShadow: "none",
    width: "100%",
    padding: "2.5rem 5%",
    minHeight: "400px",
  },
  // Left side for contact information
  contactContainer: {
    flex: 1,
    padding: "1rem 2rem 1rem 0", // Padding adjusted for inner spacing
    minWidth: "300px",
    display: "flex",
    flexDirection: "column",
    textAlign: "left", // Default desktop alignment
  },
  heading: {
    fontSize: "1.5rem",
    marginBottom: "1.5rem",
    fontWeight: "600",
  },
  text: {
    margin: "0.5rem 0",
    lineHeight: "1.5",
  },
  addressBlock: {
    marginTop: "2rem",
    borderLeft: "2px solid #a8a09e", // Visual separator
    paddingLeft: "1rem",
  },
  branding: {
    marginTop: "auto", // Pushes branding/icons to the bottom
  },
  logoText: {
    fontSize: "1.25rem",
    lineHeight: "1.2",
    color: "#f0f0f0", // This ensures the text stays white/off-white
    fontWeight: "lighter",
    letterSpacing: "0.1em",
    textDecoration: "none", // <--- THIS REMOVES THE UNDERLINE
  },
  logoTextLarge: {
    fontSize: "3rem",
    lineHeight: "1",
    fontWeight: "bold",
    textTransform: "lowercase",
    letterSpacing: "0.1em",
    color: "#f0f0f0",
  },
  socialIcons: {
    marginTop: "1.5rem",
    display: "flex",
    gap: "1rem",
    // Desktop default: align left
    justifyContent: "flex-start",
  },
  socialIcon: {
    fontSize: "1.5rem",
    // backgroundColor: "#1c1c1c",
    color: "ffff",
    borderRadius: "50%",
    width: "3rem",
    height: "3rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
  },
  // Right side for the map embed
  mapWrapper: {
    flex: 1,
    padding: "1rem 0 1rem 2rem",
    minWidth: "350px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  iframe: {
    width: "100%",
    aspectRatio: "16 / 9",
    minHeight: "300px",
    border: "none",
    borderRadius: "0.75rem",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  },
};

// --- Mobile-specific styles for centralization ---
const mobileStyles = {
  contactContainer: {
    textAlign: "center",
    alignItems: "center",
    padding: "1rem 0", // Remove horizontal padding
    borderLeft: "none",
    width: "100%", // Take full width when stacked
  },
  addressBlock: {
    borderLeft: "none", // Remove separator
    paddingLeft: "0",
  },
  socialIcons: {
    justifyContent: "center", // Center icons on mobile
    marginBottom: "2rem", // Add space before other content
    marginTop: "0",
  },
  mapWrapper: {
    padding: "1rem 0",
    minWidth: "100%",
  },
};

// Component for Social Icons (extracted for easy repositioning)
const SocialIcons = ({ isMobile }) => (
  <div
    style={{
      ...styles.socialIcons,
      ...(isMobile ? mobileStyles.socialIcons : {}),
    }}
  >
    {/* Placeholder icons (you'd use actual icon components here) */}
    {/* <span style={styles.socialIcon}></span> */}
   <a
  href="https://www.instagram.com/shagunutsav/"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/SVG/instaa.svg" alt="Instagram" style={styles.socialIcon} loading="lazy" decoding="async" />
</a>

<a
  href="https://www.youtube.com/@Shagunutsav"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/SVG/yt.svg" alt="YouTube" style={styles.socialIcon} loading="lazy" decoding="async" />
</a>

<a
  href="https://www.facebook.com/Utsav.kukshi26"
  target="_blank"
  rel="noopener noreferrer"
>
  <img src="/SVG/facebook.svg" alt="Facebook" style={styles.socialIcon} loading="lazy" decoding="async" />
</a>

    
  </div>
);

const ContactInfo = ({ isMobile }) => (
  <div
    style={{
      ...styles.contactContainer,
      ...(isMobile ? mobileStyles.contactContainer : {}),
    }}
  >
    {/* 1. SOCIAL ICONS (Shown at TOP on mobile) */}
    {isMobile && <SocialIcons isMobile={isMobile} />}

    <h2 style={styles.heading}>Get in touch with us</h2>

    <p style={styles.text}>Shagunutsav@outlook.com</p>
    <p style={styles.text}>+91 93993 05028</p>

    <div
      style={{
        ...styles.addressBlock,
        ...(isMobile ? mobileStyles.addressBlock : {}),
      }}
    >
      <p style={styles.text}>Add: Utsav Studio & Graphics,</p>
      <p style={styles.text}>Singhana Road, Kukshi, Madhya Pradesh</p>
      <p style={styles.text}>454331</p>
    </div>

    
    <div style={styles.branding}>
  {/* Apply styles directly to the Link tag to override browser defaults */}
  {/* <Link 
    to="/admin" 
    style={{ textDecoration: 'none', color: 'inherit' }}
  > */}
    <p style={styles.logoText}>शगुन</p>
  {/* </Link> */}
  
  <p style={styles.logoTextLarge}> utsav</p>

  {!isMobile && <SocialIcons isMobile={isMobile} />}
</div>
  </div>
);

const EmbeddedMap = ({ src, isMobile }) => (
  <div
    style={{
      ...styles.mapWrapper,
      ...(isMobile ? mobileStyles.mapWrapper : {}),
    }}
  >
    <iframe
      title="Utsav Studio & Graphics Location"
      src={src}
      style={styles.iframe}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
);

const NewFooter = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_BREAKPOINT);
    };

    // Set initial state
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array means this runs only on mount and unmount

  return (
    <footer style={styles.appContainer}>
      <div style={styles.mainCard}>
        <ContactInfo isMobile={isMobile} />
        <EmbeddedMap src={MAP_SRC} isMobile={isMobile} />
      </div>
    </footer>
  );
};

export default NewFooter;
