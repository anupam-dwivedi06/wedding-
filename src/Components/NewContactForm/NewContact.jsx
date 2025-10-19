import React from 'react'
import Form from "../Form/Form"

const styles = {
    
    imageContainer: {
        width: '100%',
        maxHeight: '70vh', 
        overflow: 'hidden', 
    },
    
    headerImg: {
        width: '100%',
        height: '100%', 
        objectFit: 'cover', 
        display: 'block', 
    }
}

const NewContact = () => {
  return (
    <div>
    <div style={styles.imageContainer}>
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
