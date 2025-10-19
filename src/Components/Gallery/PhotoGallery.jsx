import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './PhotoGallery.css';

// ... (Image URLs remain the same)

const CardSlider = () => {
    const navigate = useNavigate();
    const images = [
        "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal06_yhmbig.jpg",
        "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551250/Subham11_fi7x93.jpg",
        "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551248/Subham05_u6mg6u.jpg",
        "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi02_xlfxbz.jpg",
        "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal10_jokw0f.jpg",
        "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552504/Agrawal17_fydqlw.jpg",
        "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552504/Agrawal15_j1fz7w.jpg",
        'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal07_ore2fd.jpg',
        "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham01_j6qy0s.jpg",
        "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi04_z1qpnr.jpg",
        "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551251/Subham09_pmuwdo.jpg",
        "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi11_ojt3rr.jpg",
        "https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi08_jt4ozx.jpg",
    ];

    const sliderRef = useRef(null);
    const [centerIndex, setCenterIndex] = useState(0);

    let isDown = false;
    let startX;
    let scrollLeft;

    const startDrag = (e) => {
        isDown = true;
        // Check if sliderRef.current exists before using classList
        if (sliderRef.current) sliderRef.current.classList.add('active');
        
        // Use e.touches for mobile, e.pageX for desktop
        const clientX = e.pageX || (e.touches ? e.touches[0].clientX : 0);
        
        // Ensure the element is available
        if (sliderRef.current) {
            startX = clientX - sliderRef.current.offsetLeft; 
            scrollLeft = sliderRef.current.scrollLeft;
        }
    };

    const endDrag = () => {
        isDown = false;
        if (sliderRef.current) sliderRef.current.classList.remove('active');
        updateCenter();
    };

    const onDrag = (e) => {
        if (!isDown || !sliderRef.current) return;
        e.preventDefault();
        const clientX = e.pageX || (e.touches ? e.touches[0].clientX : 0);
        const x = clientX - sliderRef.current.offsetLeft;
        const walk = (x - startX) * 2; 
        sliderRef.current.scrollLeft = scrollLeft - walk;
        updateCenter();
    };
    
    // Touch handlers
    const onTouchStart = (e) => startDrag(e);
    const onTouchEnd = (e) => endDrag(e);
    const onTouchMove = (e) => onDrag(e);


    const updateCenter = () => {
        const slider = sliderRef.current;
        if (!slider) return;

        const cards = Array.from(slider.children).filter(node => node.nodeType === 1); // Filter for element nodes
        const sliderCenter = slider.scrollLeft + slider.offsetWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        cards.forEach((card, idx) => {
            const cardCenter = card.offsetLeft + card.offsetWidth / 2;
            const distance = Math.abs(sliderCenter - cardCenter);
            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = idx;
            }
        });

        setCenterIndex(closestIndex);
    };

    useEffect(() => {
        updateCenter();
        
        const slider = sliderRef.current;
        if (slider) {
            slider.addEventListener('scroll', updateCenter);
        }
        
        window.addEventListener('resize', updateCenter);
        
        return () => {
            window.removeEventListener('resize', updateCenter);
            if (slider) {
                slider.removeEventListener('scroll', updateCenter);
            }
        };
    }, []);

    // Placeholder function for button click
    const handleExploreClick = () => {
        console.log('Explore More button clicked! Navigating to gallery...');
        // Implement your actual navigation logic here
    };

    return (
        <div className="slider-wrapper">
            <div
                className="slider"
                ref={sliderRef}
                onMouseDown={startDrag}
                onMouseLeave={endDrag}
                onMouseUp={endDrag}
                onMouseMove={onDrag}
                // Add touch handlers for mobile support
                onTouchStart={onTouchStart}
                onTouchEnd={onTouchEnd}
                onTouchMove={onTouchMove}
                onTouchCancel={onTouchEnd}
            >
                {images.map((src, idx) => (
                    <div className={`card ${centerIndex === idx ? 'center' : ''}`} key={idx}>
                        <img src={src} alt={`Card ${idx + 1}`} />
                    </div>
                ))}
            </div>
            
            {/* --- New Explore More Button and Line Element --- */}
            <div className="explore-line-container">
                <div className="explore-line"></div>
                <button 
                    className="explore-button"
                    onClick={()=> navigate("/shagun")}   
                >
                    Explore more
                </button>
            </div>
            
        </div>
    );
};

export default CardSlider;