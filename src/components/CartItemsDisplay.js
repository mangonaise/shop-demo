import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import productsData from '../productsData.json';
import './styles/CartItemsDisplay.css';

const CartItemsDisplay = ({ cart, onIncrementOrder, onDecrementOrder }) => {
  return (
    <div className="cart-order-container">
      {cart.map((order, index) => {
        let data = productsData.find(data => data.itemId === order.itemId);
        let name = data.name;
        let imageUrl = data.images[0];

        return (
        <div className="cart-order" key={index}>
          <button 
            className="change-order-quantity-button"
            onClick={event => {onDecrementOrder(order.itemId); event.target.blur()}}
          >
            <FontAwesomeIcon icon={faMinusCircle} style={{pointerEvents: 'none'}}/>
          </button>
          <button 
            className="change-order-quantity-button"
            onClick={event => {onIncrementOrder(order.itemId); event.target.blur()}}
          >
            <FontAwesomeIcon icon={faPlusCircle} style={{pointerEvents: 'none'}}/>
          </button>
          <img src={imageUrl} alt="order preview"/>
          <span className="cart-order-name">{name}</span>
          <span className="cart-order-quantity">x{order.quantity}</span>
        </div>
        )
      })}
    </div>
  )
}

export default CartItemsDisplay;