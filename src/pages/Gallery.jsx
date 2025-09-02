import React from 'react';
import ImageGallery from "../components/ImageGallery";
import FloatingBalls from "../components/FloatingBalls";

// Automatically import all images from a folder
function importAll(r) {
    return r.keys().map(r);
}

const photos = importAll(require.context('../assets/image-gallery', false, /\.(png|jpe?g|svg)$/));

const Gallery = () => {
    return (
        <div style={{ position: "relative" }}>
            <FloatingBalls count={100} />
            <ImageGallery photos={photos} />
        </div>
    );
};

export default Gallery;
