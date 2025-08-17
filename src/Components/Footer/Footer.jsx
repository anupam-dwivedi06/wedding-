import React from 'react';
// import { FaXTwitter, FaFacebook, FaInstagramSquare, FaLinkedin } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
  return (
    <>
      <section className="footer-container">
        <div className="footer">
          <div className="foot foot1">
            <ul>
              <li className="foot-head">Business</li>
              <li>
                Singana Road, Kukshi <br /> Madhya Pradesh 454331
              </li>
              <li>
                <span>Phone:</span> 9399305028 <br />
                <span>Email:</span> utsav.kukshi26@gmail.com
              </li>
            </ul>
          </div>

          <div className="foot foot2">
            <ul>
              <li className="foot-head">Useful Links</li>
              <li><a href="">Home</a></li>
              <li><a href="">About Us</a></li>
              <li><a href="">Services</a></li>
              <li><a href="">Terms of Services</a></li>
            </ul>
          </div>

          <div className="foot foot3">
            <ul>
              <li className="foot-head">Our Services</li>
              <li>Photography & Videography</li>
              <li>Makeup & Bridal Makeover</li>
              <li>Optional Add-Ons </li>
              {/* <li>Marketing</li> */}
            </ul>
          </div>

          <div className="foot foot4">
            <ul>
              <li className="foot-head">Follow Us</li>
              <li>anupamdwivedi0529</li>
              <li><span>Phone:</span> 8318421898</li>
              <li><span>Email:</span> info@example.com</li>
            </ul>
            {/* <div className="foot-img">
              <FaXTwitter />
              <FaFacebook />
              <FaInstagramSquare />
              <FaLinkedin />
            </div> */}
          </div>
        </div>
      </section>

      <div className="copyright">
        <i className="fa-regular fa-copyright" />
        &nbsp;Copyright &copy; Developed by Anupam Dwivedi
      </div>
    </>
  );
};

export default Footer;
