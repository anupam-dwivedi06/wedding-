import React from 'react';
import './NavAbout.css';

const collageImages = [
    { src: 'path/to/image1.jpg', alt: 'Early work photo 1' },
    { src: 'path/to/image2.jpg', alt: 'Early work photo 2' },
    { src: 'path/to/image3.jpg', alt: 'Early work photo 3' },
    { src: 'path/to/image4.jpg', alt: 'Early work photo 4' },
];

function NavAbout() {
    return (
        <div className="founder-note-section">
            <div className="founder-note-container">
                
                {/* 1. Image Collage Column */}
                <div className="collage-column">
                    <div className="collage-wrapper">
                        {/* Placeholder for images based on the screenshot */}
                        <div className="collage-image-1">
                            {/* Replace with actual image source */}
                            <img src="IMAGE_1_PLACEHOLDER" alt="Early setup image" />
                        </div>
                        <div className="collage-image-2">
                            <img src="IMAGE_2_PLACEHOLDER" alt="Old photography setup" />
                        </div>
                        <div className="collage-image-3">
                            <img src="IMAGE_3_PLACEHOLDER" alt="Current team meeting" />
                        </div>
                        <div className="collage-image-4">
                            <img src="IMAGE_3_PLACEHOLDER" alt="Current team meeting" />
                        </div>
                    </div>
                </div>

                {/* 2. Text Content Column */}
                <div className="content-column">
                    <h2>About us</h2>
                    <p className="founder-note-head">Founder's Note - By **Hiralal Rathor**</p>

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
                        **Hiralal Rathor**<br />
                        Founder, Utsav Studio & Graphics
                    </p>
                </div>
            </div>
        </div>
    );
}

export default NavAbout;