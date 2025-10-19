import React from 'react';
import './tesimonials.css';
import { useNavigate } from 'react-router-dom';

const testimonials = [
  {
    name: 'Kesaw & Kirti',
    // role: 'Customer', // ROLE REMOVED
    // imgSrc: 'Ellipse 1.png',
    alt: 'Photo',
    message: `
Mujhe Utsav Studio ek dost ne recommend kiya tha. Honestly, meri taraf se zyada demands ya specific requirements nahi thi. Lekin unki team ne jitni dedication aur creativity ke saath kaam kiya. Har photo aur video beautifully capture hua, aur pura experience stress-free raha. Definitely a great decision to go with them.
`,
    route: '/photogallery',
  },
  {
    name: 'Vanshika & Kush',
    // role: 'Customer', // ROLE REMOVED
    // imgSrc: 'Ellipse 4 (1).png',
    alt: 'Photo',
    message: `
Best Friend ki recommendation aur Instagram reels dekh kar maine Utsav Studio choose kiya. Team ka behaviour bahut professional aur friendly tha. Delivery thodi delay hui, lekin final results dekhkar laga wait worth tha. Hum itne satisfied hain ki maine family me bhi recommend kiya`,
    route: '/photgallery2',
  },
  {
    name: 'Divyansh Thakur',
    // role: 'Customer', // ROLE REMOVED
    // imgSrc: 'Ellipse 6.png',
    alt: 'Photo',
    message: `Utsav mera dost hai, isliye naturally maine apni sister ki wedding ke liye uski team ko choose kiya. Lekin dosti se upar unhone full professionalism dikhaya. Har function ka shoot perfect raha, aur final photos aur videos dekh kar family sabhi khush ho gaye. Truly proud of his work!`,
    route: '/photgallery3',
  },
];

const FiveStarRating = () => (
    <div className="star-rating">
        <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
    </div>
);

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

        <div className="customer-container">
          {testimonials.map((testimonial, index) => (
            <div className="customer-card" key={index}>
              <p className="say">{testimonial.message}</p>
              
              <div className="card-footer">
                <div className="customer-photo">
                    <div className="initials-placeholder">
                        {testimonial.name.charAt(0)}
                    </div>
                    <div className="customer-info">
                      <h4 className="customer-name">{testimonial.name}</h4>
                      
                      {/* --- RATING ADDED HERE --- */}
                      <FiveStarRating />
                      
                    </div>
                </div>
                <button className="gallery-button" onClick={() => navigate("/shagun")}>
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