// src/ImageSlider.jsx
import React, { useState } from 'react';
import './ImageSlider.css'; // Import the CSS file
import image1 from "./assets/images.jpg";
import image2 from "./assets/images1.jpg";
import image3 from "./assets/images2.jpg";


const images = [
  { id: 1, url: image1 },
  { id: 2, url: image2 },
  { id: 3, url: image3 }
];

const ImageSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextImage = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="image-slider-container">
      <h2>Image Slider</h2>
      <div>
        <img src={images[activeIndex].url} alt={`Slide ${activeIndex + 1}`} />
      </div>
      <div className="button-container">
        <button onClick={prevImage}>Previous</button>
        <button onClick={nextImage}>Next</button>
      </div>

      <div className="indicator-container">
        {images.map((_, index) => (
          <span 
            key={index}
            className={`indicator ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          >
            O
          </span>
        ))}
      </div>
    </div>
    );
};

export default ImageSlider;