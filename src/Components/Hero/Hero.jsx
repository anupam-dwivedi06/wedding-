import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <>
    <div className="hero-container">
    {/* tagline section */}

    <div className="tag-container">

        <h1>Shagun Utsav</h1>
        <h2>Capturing Emotions, Creating Memories</h2>
        <p><span>Since 2001</span> Shagun Utsav has been turning moments into lifelong memories. With a passion for perfection, we offer timeless photography and cinematic stories</p>

    </div>

    {/* hero section image */}

    { <div className="img-container">
        <img src="https://www.ptaufiqphotography.com/wp-content/uploads/2024/06/ptaufiq-indian-wedding-rajkot-India-ceremony-couple-portraits.jpg" alt="" />
    </div> }

    </div>
    </>
  )
}

export default Hero