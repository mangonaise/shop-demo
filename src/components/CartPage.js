import React from 'react';
import CartItemsDisplay from './CartItemsDisplay';
import { Link } from 'react-router-dom';
import productsData from '../productsData.json';

const CartPage = (props) => {
  const cart = props.cart;

  function calculateTotal() {
    return cart.reduce((total, order) => {
      const itemInfo = productsData.find(item => order.itemId === item.itemId);
      return total + (order.quantity * itemInfo.price);
    }, 0)
  }

  return (
    <div className="page-container">
      <h1>Cart</h1>
      {cart.length === 0 ?
        <h2 style={{textAlign: 'center'}}>🤔 
          There's nothing here. Get shopping!
        </h2>
        :
        <>
          <CartItemsDisplay {...props}/>
          <div>Total: <strong>{`$${calculateTotal().toFixed(2)}`}</strong></div>
          <Link to="/checkout">
            <button className="important-button">
              Proceed to checkout
            </button>
          </Link>
        </>
      }
    </div>
  )
}

export default CartPage;