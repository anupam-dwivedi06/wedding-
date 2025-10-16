import React, { useRef, useState, useEffect } from 'react';
import './PhotoGallery.css';

import photo1 from '/Slider-photo/IMG_0656.JPG';
import photo2 from '/Slider-photo/IMG_0658.JPG';
import photo3 from '/Slider-photo/IMG_0657.JPG';
import photo4 from '/Slider-photo/IMG_7423.JPG';
import photo6 from '/Slider-photo/IMG_0749.JPG';
import photo7 from '/Slider-photo/IMG_0748.JPG';
import photo8 from '/Slider-photo/IMG_0747.JPG';
import photo9 from '/Slider-photo/IMG_0660.JPG';
import photo10 from '/Slider-photo/IMG_0659.JPG';

const CardSlider = () => {
  const images = [photo1, photo2, photo3, photo9, photo10, photo4, photo6, photo7, photo8];
  const sliderRef = useRef(null);
  const [centerIndex, setCenterIndex] = useState(0);

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
    updateCenter();
  };

  const onDrag = (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - walk;
    updateCenter();
  };

  const updateCenter = () => {
    const slider = sliderRef.current;
    const cards = Array.from(slider.children);
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
    window.addEventListener('resize', updateCenter);
    return () => window.removeEventListener('resize', updateCenter);
  }, []);

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
        <div className={`card ${centerIndex === idx ? 'center' : ''}`} key={idx}>
          <img src={src} alt={`Card ${idx + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default CardSlider;
