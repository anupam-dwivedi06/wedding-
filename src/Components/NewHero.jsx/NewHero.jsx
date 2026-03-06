import React from 'react';

const VideoHero = () => {
    return (
        <div className="video-hero-container">
            <style dangerouslySetInnerHTML={{__html: `
                /* Base Styles */
                body {
                    margin: 0;
                    font-family: 'Inter', sans-serif;
                }
                
                .video-hero-container {
                    position: relative;
                    width: 100%;
                    height: 100vh; /* Full viewport height */
                    overflow: hidden;
                    background-color: #000;
                    display: flex; 
                    justify-content: center;
                    align-items: center;
                }

                /* Video Background Styling */
                .hero-video {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 1;
                    filter: brightness(0.65); /* Darken video for better text contrast */
                }

                /* Hero Text/Content Area */
                .hero-content {
                    position: relative;
                    z-index: 5; 
                    text-align: center;
                    color: #fff;
                    padding: 0 20px;
                }
                
                .hero-content h1 {
                    font-size: 4rem;
                    margin-bottom: 1rem;
                    text-shadow: 0 4px 10px rgba(0, 0, 0, 0.9); 
                    font-weight: 800;
                    line-height: 1.2;
                }

                .hero-content p {
                    font-size: 1.4rem;
                    max-width: 700px;
                    margin: 0 auto 0 auto; 
                    text-shadow: 0 2px 5px rgba(0, 0, 0, 0.9);
                    font-weight: 300;
                }

                /* --- NEW LOGO STYLING --- */
                .bottom-left-logo {
                    position: absolute;
                    bottom: -30px; /* Space from the bottom edge */
                    left: 30px; /* Space from the left edge */
                    width: 160px; /* Adjust size as needed for desktop */
                    height: auto;
                    z-index: 10; /* Ensure it is above the video and content */
                    filter: drop-shadow(0 2px 5px rgba(0, 0, 0, 0.7)); /* Shadow for contrast */
                }

                /* Media Query for Mobile View */
                @media (max-width: 768px) {
                    .hero-content h1 {
                        font-size: 2.5rem;
                    }
                    .hero-content p {
                        font-size: 1.1rem;
                        margin-bottom: 0;
                    }
                    /* Mobile Logo adjustment */
                    .bottom-left-logo {
                        bottom: -22px;
                        left: 20px;
                        width: 120px; /* Smaller size on mobile */
                    }
                }
            `}} />
            
            {/* 1. Video Background Element (Z-index 1) */}
            <video 
                src="https://res.cloudinary.com/dsgdfqnbj/video/upload/v1760623960/navvideo_wedding_ebhr1l.webm" 
                className="hero-video"
                autoPlay 
                loop 
                muted 
                playsInline 
                poster="https://placehold.co/1920x1080/000000/FFFFFF?text=Loading+Video" 
            />

            {/* 2. Central Hero Message (Z-index 5) */}
            {/* <div className="hero-content">
                <h1>Cinematic Wedding Stories</h1>
                <p>Capturing the genuine emotions and timeless traditions of your special day, framed forever.</p>
            </div> */}
            
            {/* 3. NEW LOGO ELEMENT (Z-index 10) */}
            <img 
                src="https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760861674/web_logo_hrzdzy.png" 
                alt="Company Logo"
                className="bottom-left-logo"
                loading="lazy"
                decoding="async"
            />
        </div>
    );
}

export default VideoHero;