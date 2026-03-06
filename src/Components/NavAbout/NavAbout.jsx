import React from 'react';
import './NavAbout.css';
import { useNavigate } from 'react-router-dom';
import { optimizeCloudinary } from '../../utils/cloudinary';

function NavAbout() {
    const navigate = useNavigate();
    return (
        <div className="founder-note-section">
            <div className="founder-note-container">
                
                {/* 1. Image Collage Column */}
                <div className="collage-column">
                    <div className="collage-wrapper">
                        <div className="collage-image-1">
                            <img src={optimizeCloudinary("https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760556064/About01_pdebmy.jpg", { width: 600, q: "auto", f: "auto" })} alt="Early setup image" loading="lazy" decoding="async" />
                        </div>
                        <div className="collage-image-2">
                            <img src={optimizeCloudinary("https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760556064/About02_xp1e3f.jpg", { width: 600, q: "auto", f: "auto" })} alt="Old photography setup" loading="lazy" decoding="async" />
                        </div>
                        <div className="collage-image-3">
                            <img src={optimizeCloudinary("https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760556065/About03_pzv406.jpg", { width: 600, q: "auto", f: "auto" })} alt="Current team meeting" loading="lazy" decoding="async" />
                        </div>
                        <div className="collage-image-4">
                            <img src={optimizeCloudinary("https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760556064/About04_jewfkj.jpg", { width: 600, q: "auto", f: "auto" })} alt="Current team meeting" loading="lazy" decoding="async" />
                        </div>
                    </div>
                </div>

                {/* 2. Text Content Column */}
                <div className="content-column">
                    <h2>About us</h2>
                    <p className="founder-note-head">Founder's Note </p>

                    <p>
                        When I founded Utsav Studio & Graphics in 2001, I had just one dream to preserve
                        the true joy, traditions, and emotions of every wedding and celebration in timeless photographs.
                        At that time, technology was limited, but passion and hard work were our greatest strengths.
                    </p>

                    <p>
                        Over the years, we lived countless moments of happiness with our clients,
                        turning their celebrations into memories that could be cherished for generations. Slowly,
                        Utsav Studio grew beyond just a studio - it became a trusted name, built on sincerity and dedication.
                    </p>

                    <p>
                        Today, my son Nilkamal Rathor (Utsav) is carrying this journey forward with a vision for the modern era.
                        He has redefined our legacy through Shagun Utsav, where tradition meets cinematic storytelling. I feel proud
                        that the foundation we built with honesty and effort is now reaching new heights
                        while fulfilling the needs of today's couples.
                    </p>

                    <p>
                        For us, every wedding is not just a shoot - it is a story we live with and preserve forever.
                    </p>

                    <p className="founder-signature">
                        Hiralal Rathor<br />
                        Founder, Utsav Studio & Graphics
                    </p>
                </div>
            </div>
            
            {/* NEW: Footer Hero Image Section */}
            <div className="footer-hero">
                <img 
                    src={optimizeCloudinary("https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760902908/aboutnewfooterimg_nw0ojq.jpg", { width: 1200, q: 'auto', f: 'auto' })} 
                    alt="Couple performing wedding rituals"
                    className="footer-hero-image"
                    loading="lazy"
                    decoding="async"
                />
                <div className="hero-content-overlay">
                    <p>EVERY MOMMENTS MATTERS.</p>
                    <button className="contact-button" onClick={()=> navigate("/newcontact")}>Let's Create Yours.</button>
                </div>
            </div>
            {/* END: Footer Hero Image Section */}
        </div>
    );
}

export default NavAbout;