import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Nav.css';

const Nav = () => {
  return (
    <nav>
      <ul>
        <CSSTransition in={true} appear={true} timeout={500} classNames="nav-item">
          <li><a href="/">Home</a></li>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={500} classNames="nav-item">
          <li><a href="/menu">Menu</a></li>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={500} classNames="nav-item">
          <li><a href="/reservation">Reservation</a></li>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={500} classNames="nav-item">
          <li><a href="/contact">Contact</a></li>
        </CSSTransition>
      </ul>
    </nav>
  );
}

export default Nav;
