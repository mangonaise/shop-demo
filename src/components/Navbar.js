import React from 'react';
import './styles/Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = ({ cartItemCount }) => {
  return (
    <nav id="navbar">
      <Link to="/" id="navbar-title" className="navbar-item">jqk.</Link>
      <NavLink exact to="/" className="navbar-item">Home</NavLink>
      <NavLink exact to="/products" className="navbar-item">Store</NavLink>
      <NavLink exact to="/cart" id="basket-link" className="navbar-item">
        <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
        <span id="cart-item-count">{cartItemCount}</span>
      </NavLink>
    </nav>
  )
}

export default Navbar;