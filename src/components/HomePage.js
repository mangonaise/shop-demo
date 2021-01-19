import React from 'react';
import './styles/HomePage.css';
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div id="home-page-container">
      <h1 id="home-page-header">jack, queen, king.</h1>
      <div id="home-page-icons">
        <span>♣</span> 
        <span className="red"> ♦ </span>
        <span> ♠ </span>
        <span className="red">♥</span>
      </div>
      <div id="home-page-description">
        <h2>Playing cards with character.</h2>
        <p>
          Browse our selection of unique playing cards. Designed by talented artists, these finely crafted decks are
          perfectly suited to express your individuality.
        </p>
      </div>
      <Link to="/products" id="home-page-shop-button">Take a look</Link>
    </div>
  )
}

export default HomePage;