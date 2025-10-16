import React from 'react'
import Form from "../Form/Form"

const styles = {
    // 1. Container to define the maximum visible area
    imageContainer: {
        width: '100%',
        // Use max-height based on viewport height (vh) for better control.
        // 50vh means it will take up 50% of the screen's height, preventing vertical overflow.
        maxHeight: '70vh', 
        overflow: 'hidden', // Crucial: clips the image if it exceeds the max-height
    },
    // 2. Image element to fill the container
    headerImg: {
        width: '100%',
        height: '100%', // Make the image fill the container's height
        // Ensures the image covers the container while maintaining its aspect ratio.
        objectFit: 'cover', 
        display: 'block', // Removes potential bottom margin from inline elements
    }
}

const NewContact = () => {
  return (
    <div>
    <div style={styles.imageContainer}>
        {/* The outer div now controls the max visible area */}
        <img 
            style={styles.headerImg} 
            src="https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760609796/ContactheaderImg_yx2ed2.jpg" 
            alt="Contact Page Header" 
        />
    </div>

    <div>
        <Form />
    </div>
    
    <div style={styles.imageContainer}>
        {/* The outer div now controls the max visible area */}
        <img 
            style={styles.headerImg} 
            src="https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760609939/ContactFooterImg_z2ksx3.jpg" 
            alt="Contact Page Header" 
        />
    </div>
    </div>
  )
}

export default NewContact
