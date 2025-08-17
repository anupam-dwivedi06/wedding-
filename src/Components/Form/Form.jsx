import React, { useState } from "react";
import './Form.css';

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
      newErrors.name = 'Name is required.';
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
      newErrors.event = 'Event name is required.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage('');

    if (validate()) {
      console.log('Form Data Submitted:', formData);
      setSubmitMessage('Form submitted successfully! (This is a demo, check console for data.)');
      setFormData({
        name: '',
        email: '',
        phoneWhatsApp: '',
        location: '',
        date: '',
        event: '',
      });
    } else {
      setSubmitMessage('Please correct the errors in the form.');
    }
  };

  return (
    <>
    <div className="form-big-heading">
      <h1>Our Location and Inquiry Form</h1>
    </div>

    <div className="contact-container">
      <div className="card map-card">
        <h2>Our Location</h2>
        <p>11. Rana Sanga Marg (Singana Road, Kukshi, Madhya Pradesh 454331)</p>
        <iframe
          title="Utsav Studio & Graphics"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.8445359930465!2d74.76199179999999!3d22.208013700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3961ed9410de8dcd%3A0xea7be4ead427b739!2sUtsav%20Studio%20%26%20Graphics!5e0!3m2!1sen!2sin!4v1748750782018!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>

      <div className="card form-card">
        <h2>Event Registration</h2>
        <p className="form-description">
          Fill out the details below to register for our event or to get more info.
        </p>
        <form onSubmit={handleSubmit} noValidate>
          {['name', 'email', 'phoneWhatsApp', 'location', 'date', 'event'].map((field, index) => (
            <div className="form-group" key={index}>
              <label htmlFor={field}>
                {field === 'phoneWhatsApp' ? 'Phone/WhatsApp' :
                 field === 'event' ? 'Event Name *' :
                 field === 'date' ? 'Event Date' :
                 `${field.charAt(0).toUpperCase() + field.slice(1)}${['name', 'email', 'event'].includes(field) ? ' *' : ''}`}
              </label>
              <input
                type={field === 'email' ? 'email' : field === 'date' ? 'date' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                placeholder={
                  field === 'name' ? 'Jane Doe' :
                  field === 'email' ? 'yourname@example.com' :
                  field === 'phoneWhatsApp' ? '+91 98765 43210' :
                  field === 'location' ? 'New Delhi, India' :
                  field === 'event' ? 'Wedding Ceremony' : ''
                }
              />
              {errors[field] && <p className="error-message">{errors[field]}</p>}
            </div>
          ))}

          <button type="submit" className="submit-button">Register Now</button>

          {submitMessage && (
            <p className={`submit-message ${submitMessage.includes('successfully') ? 'success' : 'failure'}`}>
              {submitMessage}
            </p>
          )}
        </form>
      </div>
    </div>
    </>
  );
};


export default ContactSection;
