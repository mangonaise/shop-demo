import React, { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import StorePage from './components/StorePage';
import ItemPage from './components/ItemPage';
import CheckoutPage from './components/CheckoutPage';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  function handleAddToCart(itemId, quantity) {
    setCart(prevCart => {
      return [
        ...prevCart,
        {
          itemId,
          quantity
        }
      ]
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
          <Route exact path="/checkout" component={CheckoutPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
