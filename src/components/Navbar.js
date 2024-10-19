import React from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart } from 'react-icons/fa';
import './Navbar.css';

function Navbar({ cartCount, favoritesCount }) {
  return (
    <nav className="navbar">
      <div className="logo">
        <span className="company-name">My Hidden Closet</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li>
          <Link to="/favorites">
            <FaHeart className="icon-heart" />
            {favoritesCount > 0 && <span className="counter">{favoritesCount}</span>}
          </Link>
        </li>
        <li>
          <Link to="/panier">
            <FaShoppingCart className="icon-cart" />
            {cartCount > 0 && <span className="counter">{cartCount}</span>}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
