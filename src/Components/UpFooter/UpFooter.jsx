import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UpFooter = () => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false); // <-- for hover state

  const backgroundImageUrl = 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760699721/Gemini_Generated_Image_p1wh8op1wh8op1wh_jsdtr2.png';

  const styles = {
    heroContainer: {
      backgroundImage: `url(${backgroundImageUrl})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      width: '100%',
      height: '400px',
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'center',
      boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,0.1)',
    },
    heroContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '20px',
      width: '100%',
    },
    heroButton: {
      backgroundColor: isHovered ? 'white' : 'transparent',  // hover color change
      color: isHovered ? 'black' : 'white',                 // hover text color change
      border: '2px solid white',
      padding: '12px 30px',
      fontSize: '16px',
      fontWeight: 'bold',
      letterSpacing: '2px',
      cursor: 'pointer',
      textTransform: 'uppercase',
      transition: 'all 0.3s ease',
      outline: 'none',
    },
  };

  return (
    <div style={styles.heroContainer}>
      <div style={styles.heroContent}>
        <button
          style={styles.heroButton}
          onClick={() => navigate('/newcontact')}
          onMouseEnter={() => setIsHovered(true)}   // detect hover start
          onMouseLeave={() => setIsHovered(false)}  // detect hover end
        >
          BOOK NOW
        </button>
      </div>
    </div>
  );
};

export default UpFooter;
