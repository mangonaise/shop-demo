import React, { useState } from 'react';

const ItemImageCarousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  function cycleImage() {
    setCurrentImageIndex(prevIndex => {
      return prevIndex + 1 === images.length ? 0 : prevIndex + 1;
    })
  }

  return (
    <div id="item-page-image-container">
      <img 
        src={images[currentImageIndex]} 
        alt="product"
        onClick={cycleImage}
      />
      <div id="item-page-image-selection">
        {images.map((_, index) => (
          <button 
            key={index}
            className={index === currentImageIndex ? "selected-image-button" : ""}
            onClick={() => setCurrentImageIndex(index)}>
          </button>
        ))}
      </div>
    </div>
  )
} 

export default ItemImageCarousel;