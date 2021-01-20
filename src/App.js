import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import StorePage from './components/StorePage';
import ItemPage from './components/ItemPage';
import CartPage from './components/CartPage';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(itemId, quantity) {
    setCart(prevCart => {
      let appendedCart = [...prevCart, { itemId, quantity }] 
      let newCart = [];
      for (let order of appendedCart) {
        let orderWithExistingId = newCart.find(i => i.itemId === order.itemId);
        if (orderWithExistingId) {
          orderWithExistingId.quantity += order.quantity;
        }
        else {
          newCart.push({itemId: order.itemId, quantity: order.quantity})
        }
      }
      return newCart.filter(order => order.quantity !== 0);
    })
  }

  function calculateCartItemCount() {
    return cart.reduce((total, order) => total + order.quantity, 0);
  }

  return (
    <div className="App">
      <Router>
        <Navbar cartItemCount={calculateCartItemCount()}/>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/products" component={StorePage}/>
          <Route exact path="/products/:itemId">
            <ItemPage onAddToCart={handleAddToCart}/>
          </Route>
          <Route exact path="/cart">
            <CartPage 
              cart={cart}
              onIncrementOrder={id => handleAddToCart(id, 1)}
              onDecrementOrder={id => handleAddToCart(id, -1)}
            />
          </Route>
          <Route exact path="/checkout" component={CheckoutPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
