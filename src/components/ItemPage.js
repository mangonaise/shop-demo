import React, { useState } from 'react';
import './styles/ItemPage.css';
import { useParams } from 'react-router-dom';
import productsData from '../productsData.json';

const ItemPage = () => {
  const { itemId } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const itemData = productsData.find(data => data.itemId === itemId);

  function cycleImage() {
    setCurrentImageIndex(prevIndex => {
      return prevIndex + 1 === itemData.images.length ? 0 : prevIndex + 1;
    })
  }

  return (
    <div id="item-page-container">
      <div id="item-text">
        <h1>{itemData.name}</h1>
        <p id="item-price">{`$${itemData.price.toFixed(2)}`}</p>
        <div>
          {itemData.description.split('\n').map((text, key) => <p key={key}>{text}</p>)}
        </div>
      </div>
      <div id="item-page-image-container">
        <img 
          src={itemData.images[currentImageIndex]} 
          alt="product"
          onClick={cycleImage}
        />
        <div id="item-page-image-selection">
          {itemData.images.map((_, index) => (
            <button 
              key={index}
              className={index === currentImageIndex ? "selected-image-button" : ""}
              onClick={() => setCurrentImageIndex(index)}>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ItemPage;