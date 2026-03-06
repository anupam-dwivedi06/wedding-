import React, { useState, useEffect } from 'react';
import './Photoalbum3.css';
import { optimizeCloudinary } from '../../../utils/cloudinary'; 

const imagesData = [
  { id: 1, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552512/Agrawal25_sge2hg.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552512/Agrawal25_sge2hg.jpg', alt: 'Agrawal image 25' },
  { id: 2, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552509/Agrawal24_etyirx.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552509/Agrawal24_etyirx.jpg', alt: 'Agrawal image 24' },
  { id: 3, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552509/Agrawal23_vpan3h.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552509/Agrawal23_vpan3h.jpg', alt: 'Agrawal image 23' },
  { id: 4, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552508/Agrawal22_bkqxsw.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552508/Agrawal22_bkqxsw.jpg', alt: 'Agrawal image 22' },
  { id: 5, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552508/Agrawal21_shaud1.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552508/Agrawal21_shaud1.jpg', alt: 'Agrawal image 21' },
  { id: 6, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552507/Agrawal20_duovck.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552507/Agrawal20_duovck.jpg', alt: 'Agrawal image 20' },
  { id: 7, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552505/Agrawal19_sdhz4y.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552505/Agrawal19_sdhz4y.jpg', alt: 'Agrawal image 19' },
  { id: 8, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552505/Agrawal18_m4poor.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552505/Agrawal18_m4poor.jpg', alt: 'Agrawal image 18' },
  { id: 9, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552504/Agrawal17_fydqlw.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552504/Agrawal17_fydqlw.jpg', alt: 'Agrawal image 17' },
  { id: 10, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552504/Agrawal16_g7uocq.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552504/Agrawal16_g7uocq.jpg', alt: 'Agrawal image 16' },
  { id: 11, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552504/Agrawal15_j1fz7w.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552504/Agrawal15_j1fz7w.jpg', alt: 'Agrawal image 15' },
  { id: 12, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552503/Agrawal14_nvbvco.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552503/Agrawal14_nvbvco.jpg', alt: 'Agrawal image 14' },
  { id: 13, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552499/Agrawal08_l1v1rm.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552499/Agrawal08_l1v1rm.jpg', alt: 'Agrawal image 8' },
  { id: 14, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal09_ustca3.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal09_ustca3.jpg', alt: 'Agrawal image 9' },
  { id: 15, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552499/Agrawal13_lnccfu.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552499/Agrawal13_lnccfu.jpg', alt: 'Agrawal image 13' },
  { id: 16, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal11_pnvvld.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal11_pnvvld.jpg', alt: 'Agrawal image 11' },
  { id: 17, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal10_jokw0f.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal10_jokw0f.jpg', alt: 'Agrawal image 10' },
  { id: 18, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal12_lgl2et.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552498/Agrawal12_lgl2et.jpg', alt: 'Agrawal image 12' },
  { id: 19, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal06_yhmbig.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal06_yhmbig.jpg', alt: 'Agrawal image 6' },
  { id: 20, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal07_ore2fd.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal07_ore2fd.jpg', alt: 'Agrawal image 7' },
  { id: 21, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal02_c0mrha.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal02_c0mrha.jpg', alt: 'Agrawal image 2' },
  { id: 22, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552496/Agrawal01_wjjmyo.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552496/Agrawal01_wjjmyo.jpg', alt: 'Agrawal image 1' },
  { id: 23, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal03_joa7nw.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal03_joa7nw.jpg', alt: 'Agrawal image 3' },
  { id: 24, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal05_lrnb77.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal05_lrnb77.jpg', alt: 'Agrawal image 5' },
  { id: 25, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal04_i7ik7x.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760552497/Agrawal04_i7ik7x.jpg', alt: 'Agrawal image 4' },
];



const TestiPhoto = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (index) => {
        setCurrentImageIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navigateImage = (direction) => {
        let newIndex = currentImageIndex + direction;
        if (newIndex < 0) {
            newIndex = imagesData.length - 1;
        } else if (newIndex >= imagesData.length) {
            newIndex = 0;
        }
        setCurrentImageIndex(newIndex);
    };

    // Effect for keyboard navigation and closing modal
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (!isModalOpen) return;

            if (event.key === 'Escape') {
                closeModal();
            } else if (event.key === 'ArrowLeft') {
                navigateImage(-1);
            } else if (event.key === 'ArrowRight') {
                navigateImage(1);
            }
        };

        // Add event listener when modal is open
        if (isModalOpen) {
            document.addEventListener('keydown', handleKeyDown);
            // Optionally prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset'; // Restore scroll
        }

        // Clean up the event listener
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'unset'; // Ensure scroll is restored on unmount
        };
    }, [isModalOpen, currentImageIndex]); // Depend on modal state and image index

    return (
        <div className="bodys">
        <div className="gallery-container">
            <h1>My Awesome Photo Gallery</h1>
            <div className="gallery-grid">
                {imagesData.map((image, index) => (
                    <img
                        key={image.id}
                        src={optimizeCloudinary(image.full, { width: 400, crop: 'fill', q: 'auto', f: 'auto' })}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                        onClick={() => openModal(index)}
                        className="gallery-thumbnail"
                    />
                ))}
            </div>

            {isModalOpen && (
                <div className="modal" onClick={closeModal}>
                    <span className="close-button" onClick={(e) => { e.stopPropagation(); closeModal(); }}>&times;</span>
                    <div className="modal-content-wrapper" onClick={(e) => e.stopPropagation()}> {/* Prevent closing when clicking on content */}
                        <img
                            src={optimizeCloudinary(imagesData[currentImageIndex].full, { q: 'auto', f: 'auto' })}
                            alt={imagesData[currentImageIndex].alt}
                            className="modal-image"
                            loading="lazy"
                            decoding="async"
                        />
                        <div className="modal-caption">{imagesData[currentImageIndex].alt}</div>
                        <button className="nav-button prev" onClick={() => navigateImage(-1)}>&#10094;</button>
                        <button className="nav-button next" onClick={() => navigateImage(1)}>&#10095;</button>
                    </div>
                </div>
            )}
        </div>
        </div>
    );
};

export default TestiPhoto;