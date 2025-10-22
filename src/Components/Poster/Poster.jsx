import React from 'react';

// The main application component
const App = () => {
  // Using the original poster URL
  const imageUrl = "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1761059235/Postershagun_zit9mt.jpg";

  // Define the styles using standard CSS properties
  const pageStyle = {
    // Ensures the content takes up the full viewport height (100vh) and width (100vw).
    // This is the foundation for mobile responsiveness.
    width: '100vw',
    height: '100vh',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
  };

  const imageStyle = {
    // Fixed position ensures it covers the entire viewport and stays put.
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    
    // Set the background image URL
    backgroundImage: `url(${imageUrl})`,
    
    // CRITICAL for Responsiveness:
    // 'cover' scales the image to ensure the entire container is covered, 
    // maintaining the image's aspect ratio on all screen sizes (mobile/desktop).
    backgroundSize: 'cover',
    
    // Centers the image, so the most important parts are visible upon scaling.
    backgroundPosition: 'center', 
    
    backgroundRepeat: 'no-repeat',
  };

  return (
    <div style={pageStyle}>
      {/* The Poster Image container, occupying the entire viewport */}
      <div style={imageStyle}>
        {/* The poster is displayed here alone, with no overlay or content. */}
      </div>
    </div>
  );
};

export default App;
