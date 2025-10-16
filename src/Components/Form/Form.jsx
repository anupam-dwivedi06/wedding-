import React, { useState } from "react";

// Inline styles replacing the external Form.css
const styles = {
    // --- GLOBAL STYLES ---
    // Body/Container background (warm beige/off-white from the reference image)
    globalContainer: {
        fontFamily: 'Inter, sans-serif',
        backgroundColor: '#fcf8f3',
        padding: '50px 0',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    
    // --- HEADING STYLES (New, focused on the image text) ---
    formBigHeading: {
        textAlign: 'center',
        padding: '0 20px 40px 20px',
        maxWidth: '800px',
    },
    h1: {
        // Style matching the bold, large text in the reference image
        fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
        fontWeight: 700,
        color: '#444',
        marginBottom: '1rem',
        lineHeight: '1.1',
    },
    pDescription: {
        fontSize: '1.1rem',
        color: '#777',
        lineHeight: 1.6,
        padding: '0 20px',
    },
    h2: {
        fontSize: '2rem',
        fontWeight: 500,
        color: '#333',
        textAlign: 'center',
        padding: '0 0 20px 0',
    },

    // --- CONTACT CONTAINER (Simplified to center the single card) ---
    contactContainer: {
        display: 'flex',
        padding: '0 20px',
        justifyContent: 'center',
        width: '100%',
    },
    
    // --- CARD STYLES (Single Form Card) ---
    card: {
        backgroundColor: '#fff',
        borderRadius: '16px', // Slightly larger radius for elegance
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)', // Increased shadow
        padding: '50px',
        maxWidth: '650px', // Increased width for the single card
        width: '100%',
        boxSizing: 'border-box',
        border: '1px solid #eee', 
    },

    // --- FORM STYLES ---
    formGroup: {
        marginBottom: '25px',
    },
    label: {
        display: 'block',
        marginBottom: '8px',
        fontWeight: 'bold',
        color: '#444',
        fontSize: '0.9rem',
        textTransform: 'uppercase',
    },
    input: {
        width: '100%',
        padding: '12px 15px',
        border: '1px solid #ddd',
        borderRadius: '8px', // Slightly more rounded inputs
        fontSize: '16px',
        boxSizing: 'border-box',
        transition: 'border-color 0.3s, box-shadow 0.3s',
    },
    inputFocus: {
        borderColor: '#9d7c71', // Muted focus color
        outline: 'none',
        boxShadow: '0 0 0 3px rgba(157, 124, 113, 0.3)',
    },
    errorMessage: {
        color: '#dc3545',
        fontSize: '0.85rem',
        marginTop: '5px',
    },
    
    // --- BUTTON STYLES (Elegantly Muted) ---
    submitButton: {
        width: '100%',
        padding: '15px',
        backgroundColor: '#c9ad9f', // Soft, appealing beige/pink
        color: 'white',
        border: 'none',
        borderRadius: '8px',
        fontSize: '1.1rem',
        fontWeight: '600',
        cursor: 'pointer',
        transition: 'background-color 0.3s ease, transform 0.1s',
        boxShadow: '0 4px 10px rgba(201, 173, 159, 0.4)',
    },
    submitButtonHover: {
        backgroundColor: '#b89e93', // Slightly darker on hover
        transform: 'translateY(-1px)',
    },
    
    // --- SUBMIT MESSAGE STYLES ---
    submitMessage: {
        marginTop: '20px',
        padding: '12px',
        borderRadius: '6px',
        textAlign: 'center',
        fontWeight: '500',
    },
    submitSuccess: {
        backgroundColor: '#e6ffe6',
        color: '#155724',
        border: '1px solid #c3e6cb',
    },
    submitFailure: {
        backgroundColor: '#ffe6e6',
        color: '#721c24',
        border: '1px solid #f5c6cb',
    },
};

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phoneWhatsApp: '',
        location: '',
        date: '',
        event: '',
    });

    const [errors, setErrors] = useState({});
    const [submitMessage, setSubmitMessage] = useState('');
    const [isHovered, setIsHovered] = useState(false);
    const [focusedField, setFocusedField] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    const validate = () => {
        let newErrors = {};
        let isValid = true;

        if (!formData.name.trim()) {
            newErrors.name = 'Your name is required.';
            isValid = false;
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required.';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email address is invalid.';
            isValid = false;
        }

        if (!formData.event.trim()) {
            newErrors.event = 'The event name is required.';
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitMessage('');

        if (validate()) {
            // In a real app, you would send data to Firestore or an API here.
            console.log('Form Data Submitted:', formData); 
            setSubmitMessage('Inquiry sent successfully! We will contact you soon.');
            setFormData({
                name: '',
                email: '',
                phoneWhatsApp: '',
                location: '',
                date: '',
                event: '',
            });
        } else {
            setSubmitMessage('Please check the required fields and correct the errors.');
        }
    };

    // Helper function to dynamically calculate input styles
    const getInputStyle = (fieldName) => ({
        ...styles.input,
        ...(focusedField === fieldName ? styles.inputFocus : {}),
        ...(errors[fieldName] ? { borderColor: styles.errorMessage.color, boxShadow: '0 0 0 3px rgba(220, 53, 69, 0.3)' } : {}),
    });

    return (
        <div style={styles.globalContainer}>
            {/* 1. Header with custom text, matching the elegant style */}
            <div style={styles.formBigHeading}>
                <h1 style={styles.h1}>“Let’s Get to know Each Other”</h1>
                <p style={styles.pDescription}>
                    Every event is unique, and so is every couple. The more we know you, the better we can capture your story.
                    Fill out the form below, and let's begin this journey together.
                </p>
            </div>

            {/* 2. Form Card (Now centered and full width of its container) */}
            <div style={styles.contactContainer}>
                <div style={styles.card}>
                    <h2 style={{...styles.h2, padding: '0 0 20px 0'}}>Book Your Utsav</h2>
                    
                    <form onSubmit={handleSubmit} noValidate>
                        {['name', 'email', 'phoneWhatsApp', 'location', 'date', 'event'].map((field) => {
                            const label = 
                                field === 'phoneWhatsApp' ? 'Phone/WhatsApp' :
                                field === 'event' ? 'Event Name *' :
                                field === 'date' ? 'Event Date (DD-MM-YYYY)' :
                                `${field.charAt(0).toUpperCase() + field.slice(1)}${['name', 'email', 'event'].includes(field) ? ' *' : ''}`;
                            
                            const placeholder = 
                                field === 'name' ? "Who's the lucky couple?" :
                                field === 'email' ? 'So we can reach you easily' :
                                field === 'phoneWhatsApp' ? '+91 98765 43210' :
                                field === 'location' ? 'Where the celebration is happening' :
                                field === 'event' ? 'Wedding Ceremony, Birthday, etc.' : '';
                            
                            const type = field === 'email' ? 'email' : field === 'date' ? 'date' : 'text';

                            return (
                                <div style={styles.formGroup} key={field}>
                                    <label style={styles.label} htmlFor={field}>{label}</label>
                                    <input
                                        type={type}
                                        id={field}
                                        name={field}
                                        value={formData[field]}
                                        onChange={handleChange}
                                        onFocus={() => setFocusedField(field)}
                                        onBlur={() => setFocusedField(null)}
                                        placeholder={placeholder}
                                        style={getInputStyle(field)}
                                    />
                                    {errors[field] && <p style={styles.errorMessage}>{errors[field]}</p>}
                                </div>
                            );
                        })}

                        <button 
                            type="submit" 
                            style={{...styles.submitButton, ...(isHovered ? styles.submitButtonHover : {})}}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        >
                            Submit Inquiry
                        </button>

                        {submitMessage && (
                            <p style={{ 
                                ...styles.submitMessage, 
                                ...(submitMessage.includes('successfully') ? styles.submitSuccess : styles.submitFailure) 
                            }}>
                                {submitMessage}
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
