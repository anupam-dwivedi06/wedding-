import React from 'react';

// The Google Maps embed URL provided by the user
const MAP_SRC = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.8445359930465!2d74.76199179999999!3d22.208013700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3961ed9410de8dcd%3A0xea7be4ead427b739!2sUtsav%20Studio%20%26%20Graphics!5e0!3m2!1sen!2sin!4v1748750782018!5m2!1sen!2sin";

// Styles object using standard CSS properties for React's style attribute
const styles = {
    // Overall page container. Removed centering and vertical constraints 
    // to allow it to integrate as a full-width footer.
    appContainer: {
        fontFamily: 'Inter, sans-serif',
        width: '100%', // Ensure it spans the entire width
        // Removed minHeight, alignItems, justifyContent, and background
        margin: '0', 
        padding: '0',
        marginTop:'1vw', 
    },
    // Main component card, now acting as the full-width footer content bar
    mainCard: {
        display: 'flex',
        // Allows content to wrap on mobile for responsiveness
        flexWrap: 'wrap', 
        backgroundColor: '#473e3a', // Dark brown/olive color from the image
        color: '#f0f0f0', // Off-white text color
        borderRadius: '0', // Removed rounded corners for footer look
        boxShadow: 'none', // Removed shadow for flush footer look
        width: '100%', // Ensure full width
        padding: '2.5rem 5%', // Consistent padding left/right
        minHeight: '400px',
    },
    // Left side for contact information
    contactContainer: {
        flex: 1,
        padding: '1rem 2rem 1rem 0', // Padding adjusted for inner spacing
        minWidth: '300px', 
        display: 'flex',
        flexDirection: 'column',
    },
    heading: {
        fontSize: '1.5rem',
        marginBottom: '1.5rem',
        fontWeight: '600',
    },
    text: {
        margin: '0.5rem 0',
        lineHeight: '1.5',
    },
    addressBlock: {
        marginTop: '2rem',
        borderLeft: '2px solid #a8a09e', // Visual separator
        paddingLeft: '1rem',
    },
    branding: {
        marginTop: 'auto', // Pushes branding/icons to the bottom
    },
    logoText: {
        fontSize: '1.25rem',
        lineHeight: '1.2',
        color: '#f0f0f0',
        fontWeight: 'lighter',
        letterSpacing: '0.1em',
    },
    logoTextLarge: {
        fontSize: '3rem',
        lineHeight: '1',
        fontWeight: 'bold',
        textTransform: 'lowercase',
        letterSpacing: '0.1em',
        color: '#f0f0f0',
    },
    socialIcons: {
        marginTop: '1.5rem',
        display: 'flex',
        gap: '1rem',
    },
    socialIcon: {
        fontSize: '1.5rem',
        backgroundColor: '#1c1c1c',
        borderRadius: '50%',
        width: '3rem',
        height: '3rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
    },
    // Right side for the map embed
    mapWrapper: {
        flex: 1,
        padding: '1rem 0 1rem 2rem', // Padding adjusted for inner spacing
        minWidth: '350px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    iframe: {
        width: '100%',
        // Use aspect ratio for fluid height based on width
        aspectRatio: '16 / 9', 
        minHeight: '300px',
        border: 'none',
        borderRadius: '0.75rem', // Retaining rounded corners on the map iframe itself
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    },
};

const ContactInfo = () => (
    <div style={styles.contactContainer}>
        <h2 style={styles.heading}>Get in touch with us</h2>

        <p style={styles.text}>Utsav.kukshi26@gmail.com</p>
        <p style={styles.text}>+91 93993 05028</p>

        <div style={styles.addressBlock}>
            <p style={styles.text}>Add: Utsav Studio & Graphics,</p>
            <p style={styles.text}>Singhana Road, Kukshi, Madhya Pradesh</p>
            <p style={styles.text}>454331</p>
        </div>

        {/* Branding section mirroring the custom font style from the image */}
        <div style={styles.branding}>
            {/* Using the Hindi text as an example placeholder */}
            <p style={styles.logoText}>उत्सव</p> 
            <p style={styles.logoTextLarge}>utsav</p>
            
            <div style={styles.socialIcons}>
                {/* Placeholder icons (you'd use actual icon components here) */}
                <span style={styles.socialIcon}>IN</span>
                <span style={styles.socialIcon}>YT</span>
                <span style={styles.socialIcon}>FB</span>
            </div>
        </div>
    </div>
);

const EmbeddedMap = ({ src }) => (
    <div style={styles.mapWrapper}>
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
    return (
        // Using a semantic <footer> element for the component
        <footer style={styles.appContainer}>
            <div style={styles.mainCard}>
                <ContactInfo />
                <EmbeddedMap src={MAP_SRC} />
            </div>
        </footer>
    );
};

export default NewFooter;