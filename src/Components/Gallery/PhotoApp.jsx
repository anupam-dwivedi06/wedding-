import React from "react";
import CardSlider from "./PhotoGallery";

// Define consistent, responsive styles for the component
const styles = {
    appContainer: {
        marginTop: "3vw",
        // Ensure the entire app container manages its own width
        width: '100%',
        overflowX: 'hidden', // Prevent horizontal scroll if something inside is too wide
    },
    textBlock: {
        textAlign: "center",
        // FIX: Replace fixed 20rem padding with fluid max-width and percentage padding
        maxWidth: '800px', // Prevent text from spanning huge monitors
        margin: '0 auto', // Center the text block
        padding: '1rem 5%', // Use 5% padding on left/right for responsiveness
        lineHeight: 1.6,
        fontSize: '1.1rem',
        color: '#555',
    },
    heading: { 
        textAlign: "center",
        fontSize: 'clamp(2rem, 5vw, 3rem)', // Use clamp for responsive font size
        fontWeight: 700,
        color: '#333',
        margin: '2rem 0 1.5rem 0',
    }
};

function App() {
    return (
        <div style={styles.appContainer}>
            <p style={styles.textBlock}>
                Planning your Event is the most exciting and important day of your life
                and it stands to reason that you would want it captured beautifully.
                That's where We come in.
            </p>
            <h1 style={styles.heading}>
                Our Latest Shagun's
            </h1>
            <CardSlider />
        </div>
    );
}

export default App;