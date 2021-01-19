import React from 'react';
import './styles/Navbar.css';
import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  return (
    <nav id="navbar">
      <Link to="/" id="navbar-title" className="navbar-item">jqk.</Link>
      <NavLink to="/" className="navbar-item">Home</NavLink>
      <NavLink to="/products" className="navbar-item">Store</NavLink>
      <NavLink to="/checkout" id="basket-link" className="navbar-item">
        <FontAwesomeIcon icon={faShoppingCart} size="lg"/>
      </NavLink>
    </nav>
  )
}

export default Navbar;