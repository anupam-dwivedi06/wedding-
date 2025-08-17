import React from 'react';
import './tesimonials.css'
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    name: 'Saumya Kuslani',
    role: 'Customer',
    imgSrc: 'Ellipse 1.png',
    alt: 'Photo',
    message: `Anupam listened to my ideas and provided valuable input, which helped to create a user interface that was both aesthetically pleasing and easy to use. He is a very dedicated person and I like his confidence in web development.`,
  },
  {
    name: 'Yaksh Raj Banote',
    role: 'Customer',
    imgSrc: 'Ellipse 4 (1).png',
    alt: 'Photo',
    message: `I recently worked with Anupam on a project and was extremely impressed with his creativity and attention to detail. He listened to my ideas and provided valuable input, which helped to create a UI that was both aesthetically pleasing.`,
  },
  {
    name: 'Uday Jha',
    role: 'Customer',
    imgSrc: 'Ellipse 6.png',
    alt: 'Photo',
    message: `His design skills are top-notch and he effectively communicated with our team throughout the project. I highly recommend him to anyone in need of a talented UI designer. He created an outstanding website design for our company.`,
  },
];

const Testimonials = () => {

  const navigate = useNavigate();
  return (
    <section className="testimonials">
      <div className="container">
        <div className="text-heading-container">
          <h2>Testimonials</h2>
          <h1>What Our Customers Say</h1>
        </div>

        <div className="customer-container">
          {testimonials.map((testimonial, index) => (
            <div className="customer-card" key={index}>
              <div className="customer-photo">
                <img src={testimonial.imgSrc} alt={testimonial.alt} />
                <div className="customer-info">
                  <h3 className="text-color">{testimonial.name}</h3>
                  <p>{testimonial.role}</p>
                </div>
              </div>
              <p className="say">{testimonial.message}</p>
              <button onClick = {()=> navigate('/photogallery')}>Photo Gallery</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
