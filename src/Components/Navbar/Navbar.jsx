import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <>
    <nav>
        <div className=" nav-container">
        <div className="logo"><img src="IMG_1130.PNG" alt="" /></div>

        <div className='navigation'>
            <ul>
           <li > <NavLink to={'/'} className='a'>Home</NavLink></li>
            <li><a to={'/About'} className='a'>About</a></li>
            <li><a to={'/Work'} className='a'>Work</a></li>
            <li><a to={'/Contact'} className='a'>Contact</a></li>
        </ul>
        </div>

    </div>
    </nav>
    </>
  )
}

export default Navbar