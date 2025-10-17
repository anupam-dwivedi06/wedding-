import React from 'react';
import './tesimonials.css';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    name: 'Saumya Kuslani',
    role: 'Customer',
    // imgSrc: 'Ellipse 1.png',
    alt: 'Photo',
    message: `Anupam listened to my ideas and provided valuable input, which helped to create a user interface that was both aesthetically pleasing and easy to use. He is a very dedicated person and I like his confidence in web development.`,
    route: '/photogallery',
  },
  {
    name: 'Yaksh Raj Banote',
    role: 'Customer',
    // imgSrc: 'Ellipse 4 (1).png',
    alt: 'Photo',
    message: `I recently worked with Anupam on a project and was extremely impressed with his creativity and attention to detail. He listened to my ideas and provided valuable input, which helped to create a UI that was both aesthetically pleasing.`,
    route: '/photgallery2',
  },
  {
    name: 'Uday Jha',
    role: 'Customer',
    // imgSrc: 'Ellipse 6.png',
    alt: 'Photo',
    message: `His design skills are top-notch and he effectively communicated with our team throughout the project. I highly recommend him to anyone in need of a talented UI designer. He created an outstanding website design for our company.`,
    route: '/photgallery3',
  },
];

const Testimonials = () => {
  const navigate = useNavigate();

  return (
    <section className="testimonials-section">
      <div className="container">
        
        {/* === TEXT FROM YOUR IMAGE: Utsav Company Motto === */}
        <div className="company-motto">
          <p className="since-text">
            <span className='line-start'>Since 2001 Utsav</span> has been turning moments into lifelong memories With a passion for perfection.
          </p>
          <p className="mission-text">
            Our passion is to capturing precious moments on film for our clients,
            immortalizing special events and creating keepsakes to treasure forever.
          </p>
          <h2 className="blessing-quote">
            "Our Couples, Our biggest blessings."
          </h2>
        </div>
        {/* =========================================== */}
{/*         
        <div className="text-heading-container">
          <h3 className="section-subtitle">Testimonials</h3>
          <h1 className="section-title">What Our Customers Say</h1>
        </div> */}

        <div className="customer-container">
          {testimonials.map((testimonial, index) => (
            <div className="customer-card" key={index}>
              <p className="say">{testimonial.message}</p>
              
              <div className="card-footer">
                  <div className="customer-photo">
                    {/* Placeholder for photo/initials */}
                    <div className="initials-placeholder">
                        {testimonial.name.charAt(0)}
                    </div>
                    <div className="customer-info">
                      <h4 className="customer-name">{testimonial.name}</h4>
                      <p className="customer-role">{testimonial.role}</p>
                    </div>
                  </div>
                  <button className="gallery-button" onClick={() => navigate(testimonial.route)}>
                    View Gallery 📸
                  </button>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;