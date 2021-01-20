import React from 'react';
import CartItemsDisplay from './CartItemsDisplay';


const CartPage = (props) => {
  return (
    <div className="page-container">
      <h1>Cart</h1>
      {props.cart.length === 0 && <h2>🤔 There's nothing here. Get shopping!</h2>}
      <CartItemsDisplay {...props}/>
      <button className="important-button">
        Proceed to checkout
      </button>
    </div>
  )
}

export default CartPage;