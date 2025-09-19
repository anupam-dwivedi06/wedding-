import React, { useState } from 'react'; // Import useState
import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false); // State to track if the mobile menu is open

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav>
        <div className="nav-container">
          <div className="logo">
            <img src="IMG_1130.PNG" alt="Logo" />
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="hamburger" onClick={toggleMenu}>
            &#9776; {/* Unicode for a hamburger icon */}
          </div>

          {/* Use the isOpen state to conditionally apply a class */}
          <div className={`navigation ${isOpen ? 'open' : ''}`}> 
            <ul>
              {/* Change all <a> to <NavLink> for consistency and proper routing */}
              <li onClick={() => setIsOpen(false)}> 
                <NavLink to={'/'} className='navlink' activeClassName='active'>Home</NavLink>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <NavLink to={'/navabout'} className='navlink' activeClassName='active'>About</NavLink>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <NavLink to={'/Work'} className='navlink' activeClassName='active'>Work</NavLink>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <NavLink to={'/Contact'} className='navlink' activeClassName='active'>Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;