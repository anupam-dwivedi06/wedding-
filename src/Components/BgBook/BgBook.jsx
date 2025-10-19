import React from 'react';
import { useNavigate } from 'react-router-dom';

// The URL for the background image you provided
const BACKGROUND_IMAGE_URL = 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760905314/homebookfooter_szw7l2.jpg';

const BgBook = () => {
    const navigate = useNavigate();
  // Styles for the main container to set the background and center the content
  const containerStyle = {
    // Set the background image
    backgroundImage: `url(${BACKGROUND_IMAGE_URL})`,
    // Ensure the background covers the area and is fixed/positioned correctly
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    // Minimum height to ensure the content is visible
    minHeight: '550px', 
    // Flexbox for centering all child content both horizontally and vertically
    display: 'flex',
    flexDirection: 'column', // Stack children vertically
    justifyContent: 'center', // Center vertically
    alignItems: 'center',    // Center horizontally
    textAlign: 'center',     // Center text within elements
    color: 'white',          // Use a contrasting text color for readability
    padding: '20px',         // Add some internal padding
  };

  // Styles for the main text
  const textStyle = {
    fontSize: '1.5rem', // Larger font size for the main message
    fontWeight: 'semibold',
    marginBottom: '20px', // Space between text and button
    // Optional: Add a text shadow for better contrast against busy backgrounds
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
  };

  // Base styles for the button (transparent background, white border)
  const buttonStyle = {
    padding: '12px 30px',
    fontSize: '1.2rem',
    fontWeight: '600',
    cursor: 'pointer',
    backgroundColor: "transparent", // Transparent background
    border: "2px solid white",      // White border
    color: 'white',                 // White text color
    borderRadius: '5px',
    textTransform: 'uppercase',
    transition: 'background-color 0.3s ease, color 0.3s ease', // Smooth transition for both background and text color
  };
  
  // A simple function to handle the button click
  const handleBookNow = () => {
    console.log('Book Now clicked!');
    // Add your routing logic here, e.g., navigate to a booking page
    // router.push('/booking'); 
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>
        Your Story Could be the next one here. Let's Create memories together.
      </p>
     
      <button 
        style={buttonStyle}
        onClick={()=> navigate("/newcontact")}
        // Hover effect: background white, text black
        onMouseOver={(e) => {
          e.currentTarget.style.backgroundColor = 'white';
          e.currentTarget.style.color = 'black';
        }}
        onMouseOut={(e) => {
          e.currentTarget.style.backgroundColor = 'transparent';
          e.currentTarget.style.color = 'white';
        }}
      >
        Book Now
      </button>
    </div>
  );
};

export default BgBook;