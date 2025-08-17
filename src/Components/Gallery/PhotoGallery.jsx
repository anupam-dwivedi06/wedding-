import React, { useRef } from 'react';
import './PhotoGallery.css';

import photo1 from '/Slider-photo/IMG_0656.JPG';
import photo2 from '/Slider-photo/IMG_0658.JPG';

import photo3 from '/Slider-photo/IMG_0657.JPG';
import photo4 from '/Slider-photo/IMG_7423.JPG';

// import photo5 from '/Slider-photo/IMG_7421.JPG';
import photo6 from '/Slider-photo/IMG_0749.JPG';

import photo7 from '/Slider-photo/IMG_0748.JPG';
import photo8 from '/Slider-photo/IMG_0747.JPG';

import photo9 from '/Slider-photo/IMG_0660.JPG';
import photo10 from '/Slider-photo/IMG_0659.JPG';

// 👉 Add more imports as needed

const CardSlider = () => {
  const images = [photo1,photo2,photo3,photo9,photo10,,photo4,photo6,photo7,photo8]; // Add more here
  const sliderRef = useRef(null);

  let isDown = false;
  let startX;
  let scrollLeft;

  const startDrag = (e) => {
    isDown = true;
    sliderRef.current.classList.add('active');
    startX = e.pageX - sliderRef.current.offsetLeft;
    scrollLeft = sliderRef.current.scrollLeft;
  };

  const endDrag = () => {
    isDown = false;
    sliderRef.current.classList.remove('active');
  };

  const onDrag = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <div
      className="slider"
      ref={sliderRef}
      onMouseDown={startDrag}
      onMouseLeave={endDrag}
      onMouseUp={endDrag}
      onMouseMove={onDrag}
    >
      {images.map((src, idx) => (
        <div className="card" key={idx}>
          <img src={src} alt={`Card ${idx + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
