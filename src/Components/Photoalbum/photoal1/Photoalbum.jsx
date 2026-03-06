import React, { useState, useEffect } from 'react';
import './Photoalbum.css';
import { optimizeCloudinary } from '../../../utils/cloudinary'; 

const imagesData = [
  { id: 1, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551248/Subham02_n7s0tn.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551248/Subham02_n7s0tn.jpg', alt: 'Subham image 2' },
  { id: 2, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551248/Subham06_j1mjs0.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551248/Subham06_j1mjs0.jpg', alt: 'Subham image 6' },
  { id: 3, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551248/Subham05_u6mg6u.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551248/Subham05_u6mg6u.jpg', alt: 'Subham image 5' },
  { id: 4, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham03_fpnuqe.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham03_fpnuqe.jpg', alt: 'Subham image 3' },
  { id: 5, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham10_px5bl3.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham10_px5bl3.jpg', alt: 'Subham image 10' },
  { id: 6, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham07_kcza2m.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham07_kcza2m.jpg', alt: 'Subham image 7' },
  { id: 7, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham01_j6qy0s.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551249/Subham01_j6qy0s.jpg', alt: 'Subham image 1' },
  { id: 8, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551251/Subham09_pmuwdo.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551251/Subham09_pmuwdo.jpg', alt: 'Subham image 9' },
  { id: 9, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551250/Subham11_fi7x93.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551250/Subham11_fi7x93.jpg', alt: 'Subham image 11' },
  { id: 10, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551250/Subham04_i1hbur.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551250/Subham04_i1hbur.jpg', alt: 'Subham image 4' },
  { id: 11, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551251/Subham12_wgqati.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551251/Subham12_wgqati.jpg', alt: 'Subham image 12' },
  { id: 12, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551250/Subham08_i6reuu.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551250/Subham08_i6reuu.jpg', alt: 'Subham image 8' },
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