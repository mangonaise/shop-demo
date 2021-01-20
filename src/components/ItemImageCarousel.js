import React, { useState } from 'react';
import './styles/ItemImageCarousel.css';

const ItemImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function showNextImage() {
    setCurrentImageIndex(prevIndex => {
      return prevIndex + 1 === images.length ? 0 : prevIndex + 1;
    })
  }

  function showPreviousImage() {
    setCurrentImageIndex(prevIndex => {
      return prevIndex -1 === -1 ? images.length - 1 : prevIndex - 1;
    })
  }

  return (
    <div className="image-carousel">
      <div className="carousel-selection">
        <p>{`${currentImageIndex + 1} of ${images.length}`}</p>
        <button onClick={showPreviousImage}>{"<"}</button>
        <button onClick={showNextImage}>{">"}</button>
      </div>
      
      <img 
        src={images[currentImageIndex]} 
        alt="product"
        onClick={showNextImage}
      />
      <div>
        {images.map((_, index) => (
          <button
            key={index}
            className={(index === currentImageIndex ? "carousel-selected" : "") + " carousel-selection-indicator"}
            onClick={() => setCurrentImageIndex(index)}>
          </button>
        ))}
      </div>
    </div>
  )
} 

export default ItemImageCarousel;