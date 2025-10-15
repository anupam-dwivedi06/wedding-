import React, { useState, useEffect } from 'react';
import './Photoalbum2.css'; 

const imagesData = [
  { id: 1, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi02_xlfxbz.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi02_xlfxbz.jpg', alt: 'Khusi image 2' },
  { id: 2, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi04_z1qpnr.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi04_z1qpnr.jpg', alt: 'Khusi image 4' },
  { id: 3, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi01_btcazc.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi01_btcazc.jpg', alt: 'Khusi image 1' },
  { id: 4, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi03_xffrey.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi03_xffrey.jpg', alt: 'Khusi image 3' },
  { id: 5, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi05_zowe1h.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi05_zowe1h.jpg', alt: 'Khusi image 5' },
  { id: 6, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi06_gga2qk.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551900/Khusi06_gga2qk.jpg', alt: 'Khusi image 6' },
  { id: 7, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi10_vwjgcz.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi10_vwjgcz.jpg', alt: 'Khusi image 10' },
  { id: 8, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi07_imldoh.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi07_imldoh.jpg', alt: 'Khusi image 7' },
  { id: 9, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi11_ojt3rr.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi11_ojt3rr.jpg', alt: 'Khusi image 11' },
  { id: 10, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi09_y4pusq.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi09_y4pusq.jpg', alt: 'Khusi image 9' },
  { id: 11, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi12_hmctkk.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551901/Khusi12_hmctkk.jpg', alt: 'Khusi image 12' },
  { id: 12, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi08_jt4ozx.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi08_jt4ozx.jpg', alt: 'Khusi image 8' },
  { id: 13, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi14_te4x0b.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi14_te4x0b.jpg', alt: 'Khusi image 14' },
  { id: 14, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi16_og1j1u.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi16_og1j1u.jpg', alt: 'Khusi image 16' },
  { id: 15, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi15_vrwjqg.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi15_vrwjqg.jpg', alt: 'Khusi image 15' },
  { id: 16, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551903/Khusi17_i9yytn.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551903/Khusi17_i9yytn.jpg', alt: 'Khusi image 17' },
  { id: 17, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi13_c8tsti.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760551902/Khusi13_c8tsti.jpg', alt: 'Khusi image 13' },
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
                        src={image.thumb}
                        alt={image.alt}
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
                            src={imagesData[currentImageIndex].full}
                            alt={imagesData[currentImageIndex].alt}
                            className="modal-image"
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