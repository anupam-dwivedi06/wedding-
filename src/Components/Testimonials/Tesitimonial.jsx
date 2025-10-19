import React from 'react';
import './tesimonials.css';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    name: 'Khusi Agrawal',
    role: 'Customer',
    // imgSrc: 'Ellipse 1.png',
    alt: 'Photo',
    message: `
Mujhe Utsav Studio ek dost ne recommend kiya tha. Honestly, meri taraf se zyada demands ya specific requirements nahi thi. Lekin unki team ne jitni dedication aur creativity ke saath kaam kiya. Har photo aur video beautifully capture hua, aur pura experience stress-free raha. Definitely a great decision to go with them.
`,
    route: '/photogallery',
  },
  {
    name: 'Khusi Bafra',
    role: 'Customer',
    // imgSrc: 'Ellipse 4 (1).png',
    alt: 'Photo',
    message: `
Best Friend ki recommendation aur Instagram reels dekh kar maine Utsav Studio choose kiya. Team ka behaviour bahut professional aur friendly tha. Delivery thodi delay hui, lekin final results dekhkar laga wait worth tha. Hum itne satisfied hain ki maine family me bhi recommend kiya`,
    route: '/photgallery2',
  },
  {
    name: 'Subham Rathod',
    role: 'Customer',
    // imgSrc: 'Ellipse 6.png',
    alt: 'Photo',
    message: `Utsav mera dost hai, isliye naturally maine apni sister ki wedding ke liye uski team ko choose kiya. Lekin dosti se upar unhone full professionalism dikhaya. Har function ka shoot perfect raha, aur final photos aur videos dekh kar family sabhi khush ho gaye. Truly proud of his work!`,
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