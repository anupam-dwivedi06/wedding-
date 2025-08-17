import React, { useState, useEffect } from 'react';
import './Photoalbum.css'; 

const imagesData = [
    { id: 1, thumb: '/images/thumb1.jpg', full: '/images/full1.jpg', alt: 'A beautiful mountain landscape' },
    { id: 2, thumb: '/images/thumb2.jpg', full: '/images/full2.jpg', alt: 'City skyline at sunset' },
    { id: 3, thumb: '/images/thumb3.jpg', full: '/images/full3.jpg', alt: 'Abstract colorful painting' },
    { id: 4, thumb: '/images/thumb4.jpg', full: '/images/full4.jpg', alt: 'Close-up of a blooming flower' },
    { id: 5, thumb: '/images/thumb5.jpg', full: '/images/full5.jpg', alt: 'Coastal view with crashing waves' },
    { id: 6, thumb: '/images/thumb6.jpg', full: '/images/full6.jpg', alt: 'Forest path in autumn' },
    { id: 6, thumb: '/images/thumb6.jpg', full: '/images/full6.jpg', alt: 'Forest path in autumn' },
    { id: 6, thumb: '/images/thumb6.jpg', full: '/images/full6.jpg', alt: 'Forest path in autumn' },
    { id: 6, thumb: '/images/thumb6.jpg', full: '/images/full6.jpg', alt: 'Forest path in autumn' },
    { id: 6, thumb: '/images/thumb6.jpg', full: '/images/full6.jpg', alt: 'Forest path in autumn' },
    { id: 6, thumb: '/images/thumb6.jpg', full: '/images/full6.jpg', alt: 'Forest path in autumn' },
    { id: 6, thumb: '/images/thumb6.jpg', full: '/images/full6.jpg', alt: 'Forest path in autumn' },
    { id: 6, thumb: '/images/thumb6.jpg', full: '/images/full6.jpg', alt: 'Forest path in autumn' },
    { id: 6, thumb: '/images/thumb6.jpg', full: '/images/full6.jpg', alt: 'Forest path in autumn' },
    { id: 6, thumb: '/images/thumb6.jpg', full: '/images/full6.jpg', alt: 'Forest path in autumn' },
    { id: 6, thumb: '/images/thumb6.jpg', full: '/images/full6.jpg', alt: 'Forest path in autumn' },
    { id: 6, thumb: '/images/thumb6.jpg', full: '/images/full6.jpg', alt: 'Forest path in autumn' },
    { id: 6, thumb: '/images/thumb6.jpg', full: '/images/full6.jpg', alt: 'Forest path in autumn' },
    { id: 6, thumb: '/images/thumb6.jpg', full: '/images/full6.jpg', alt: 'Forest path in autumn' },
    // Add more images as needed
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