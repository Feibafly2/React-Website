import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Header.css';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src="logo.png" alt="Little Lemon" />
        <h1>Little Lemon</h1>
      </div>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservation">Reservation</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <div className="header-content">
        <h2>Welcome to Little Lemon</h2>
        <p>Experience the finest dining in a cozy and intimate atmosphere.</p>
        <button>Make a Reservation</button>
      </div>
    </header>
  );
}

export default Header;
