import React, { useState, useEffect } from 'react';
import './Photoalbum3.css'; 

const imagesData = [
  { id: 1, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457528/Subham02_smyb8y.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457528/Subham02_smyb8y.jpg', alt: 'A beautiful mountain landscape' },
  { id: 2, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457531/Subham06_zmgjbn.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457531/Subham06_zmgjbn.jpg', alt: 'City skyline at sunset' },
  { id: 3, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457533/Subham03_yxu9bl.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457533/Subham03_yxu9bl.jpg', alt: 'Abstract colorful painting' },
  { id: 4, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457535/Subham04_x9w0hp.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457535/Subham04_x9w0hp.jpg', alt: 'Close-up of a blooming flower' },
  { id: 5, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457536/Subham07_qlwc8f.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457536/Subham07_qlwc8f.jpg', alt: 'Coastal view with crashing waves' },
  { id: 6, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457538/Subham01_olhq2f.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457538/Subham01_olhq2f.jpg', alt: 'Forest path in autumn' },
  { id: 7, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457538/Subham05_a8vj8l.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457538/Subham05_a8vj8l.jpg', alt: 'Sunset over calm water' },
  { id: 8, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457541/Subham11_her9ar.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457541/Subham11_her9ar.jpg', alt: 'Night sky full of stars' },
  { id: 9, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457547/Subham08_tfociv.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457547/Subham08_tfociv.jpg', alt: 'Snow-covered mountain range' },
  { id: 10, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457547/Subham10_gs5lv1.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457547/Subham10_gs5lv1.jpg', alt: 'Vintage car on a road' },
  { id: 11, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457547/Subham09_bpkjby.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457547/Subham09_bpkjby.jpg', alt: 'Peaceful lake reflection' },
  { id: 12, thumb: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457570/Subham12_dgvkrg.jpg', full: 'https://res.cloudinary.com/dsgdfqnbj/image/upload/v1760457570/Subham12_dgvkrg.jpg', alt: 'Colorful city street' },
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