import React from 'react';
import { CSSTransition } from 'react-transition-group';
import './Main.css';

const Main = () => {
  return (
    <main>
      <section>
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade-up">
          <h2>About Us</h2>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade-up">
          <p>Little Lemon is a premier restaurant offering a delightful dining experience with a focus on fresh and seasonal ingredients.</p>
        </CSSTransition>
      </section>
      <section>
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade-up">
          <h2>Menu</h2>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade-up">
          <p>Explore our exquisite menu featuring a variety of culinary delights prepared by our talented chefs.</p>
        </CSSTransition>
      </section>
      <section>
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade-up">
          <h2>Reservation</h2>
        </CSSTransition>
        <CSSTransition in={true} appear={true} timeout={500} classNames="fade-up">
          <p>Make a reservation and secure your spot for an unforgettable dining experience at Little Lemon.</p>
        </CSSTransition>
      </section>
    </main>
  );
}

export default Main;
