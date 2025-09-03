import React, { useState, useEffect } from 'react';
import './Slider.css';

export default function Slider({ images = [], captions = [], autoSlide = true, slideInterval = 5000 }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!autoSlide || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, slideInterval);

        return () => clearInterval(interval);
    }, [images, autoSlide, slideInterval]);

    const prevSlide = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const nextSlide = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    return (
        <div className="slider-container">
            {images.map((img, index) => (
                <div key={index} className={`slider-slide ${index === currentIndex ? 'active' : ''}`}>
                    <img src={img} alt={captions[index] || `Slide ${index + 1}`} loading="lazy" decoding="async" sizes="100vw" />
                    {captions[index] && <div className="slider-caption"><h2>{captions[index]}</h2></div>}
                </div>
            ))}

            {/* Navigation buttons */}
            <button className="slider-btn prev" onClick={prevSlide}>‹</button>
            <button className="slider-btn next" onClick={nextSlide}>›</button>

            {/* Slide indicator dots */}
            <div className="slider-dots">
                {images.map((_, idx) => (
                    <span
                        key={idx}
                        className={`slider-dot ${idx === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(idx)}
                    ></span>
                ))}
            </div>
        </div>
    );
}
