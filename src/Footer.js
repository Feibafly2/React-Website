import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
          <p>&copy; {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
        </CSSTransition>
        <ul>
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
            <li><a href="/privacy-policy">Privacy Policy</a></li>
          </CSSTransition>
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
            <li><a href="/terms-of-service">Terms of Service</a></li>
          </CSSTransition>
          <CSSTransition in={true} appear={true} timeout={500} classNames="fade">
            <li><a href="/contact">Contact Us</a></li>
          </CSSTransition>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
