import React, { useState, useEffect } from "react";
import "./ImageGallery.css";

export default function ImageGallery({ photos = []}) {
    const [selectedImage, setSelectedImage] = useState(null);
    const [timer, setTimer] = useState(null);

    // Auto close after 5 seconds
    useEffect(() => {
        if (selectedImage) {
            const t = setTimeout(() => setSelectedImage(null), 5000);
            setTimer(t);
        }
        return () => clearTimeout(timer);
    }, [selectedImage]);

    return (
        <div className="gallery-container">
            <h2 className="gallery-heading">Gallery</h2>
            <div className="gallery-grid">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className="gallery-item"
                        onClick={() => setSelectedImage(photo)}
                    >
                        <img src={photo} alt={`Gallery ${index}`} />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div className="image-overlay" onClick={() => setSelectedImage(null)}>
                    <img src={selectedImage} alt="Full View" className="overlay-image" />
                </div>
            )}
        </div>
    );
}
