import React, { useState } from 'react';
import './Carousel.css'; // Импортируем CSS для стилей

import img1 from './images/a1.jpg';
import img2 from './images/a2.jpg';
import img3 from './images/a3.jpg';

const images = [img1, img2, img3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider-container">
      <button onClick={prevImage} className="slider-button">◀️</button>
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="slider-image" />
      <button onClick={nextImage} className="slider-button">▶️</button>
    </div>
  );
};

export default Carousel;
