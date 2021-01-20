import React from 'react';
import CartItemsDisplay from './CartItemsDisplay';
import { Link } from 'react-router-dom';

const CartPage = (props) => {
  return (
    <div className="page-container">
      <h1>Cart</h1>
      {props.cart.length === 0 ?
        <h2 style={{textAlign: 'center'}}>🤔 
          There's nothing here. Get shopping!
        </h2>
        :
        <>
          <CartItemsDisplay {...props}/>
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