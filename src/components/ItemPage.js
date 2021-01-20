import React, { useState, useEffect } from 'react';
import ItemImageCarousel from './ItemImageCarousel';
import './styles/ItemPage.css';
import { useParams } from 'react-router-dom';
import productsData from '../productsData.json';

const ItemPage = ({ onAddToCart }) => {
  const { itemId } = useParams();

  const [ quantity, setQuantity ] = useState(1);
  const [ showAddedMessage, setShowAddedMessage ] = useState(false);
  const itemData = productsData.find(data => data.itemId === itemId);

  function changeQuantity(event) {
    setQuantity(event.target.value);
  }

  useEffect(() => {
    let timeout;
    if (showAddedMessage) {
      timeout = setTimeout(() => {
        setShowAddedMessage(false);
      }, 2000);
    }

    return () => clearTimeout(timeout);
  }, [showAddedMessage])

  return (
    <div id="item-page-container">
      <div id="item-text">
        <h1>{itemData.name}</h1>
        <p id="item-price">{`$${itemData.price.toFixed(2)}`}</p>

        <span id="item-quantity-label">QTY</span>
        <input id="item-quantity-input" type="number" value={quantity} onChange={changeQuantity} min={1} max={10}/>

        <button 
          id="add-to-cart-button" 
          onClick={() => { onAddToCart(itemData.itemId, parseInt(quantity)); setShowAddedMessage(true);}}
        >
          Add to Cart
        </button>

        {showAddedMessage && <span id="added-to-cart-message">Added to cart!</span>}

        <div>
          {itemData.description.split('\n').map((text, key) => <p key={key}>{text}</p>)}
        </div>
      </div>
      <ItemImageCarousel images={itemData.images}/>
    </div>
  )
}

export default ItemPage;