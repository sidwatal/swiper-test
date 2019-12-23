import React from 'react';
import Swiper from 'react-id-swiper';
import './App.scss'

const App = () => {
  const params = {
    containerClass: 'home__splash swiper-container',
    loop: true,
    effect: 'fade',
    speed: 2000,
    autoplay: true,
    delay: 2500,
    fadeEffect: {
       crossFade: true
     },
  }
  return (
    <section className="landing__splash">
      <div className="landing__splash-background">
        <Swiper {...params}>
          <div className="slide">
            <div className="slide__image slide-1-a" />
            <div className="slide__image slide-1-b" />
          </div>
          <div className="slide">
            <div className="slide__image slide-2-a" />
            <div className="slide__image slide-2-b" />
          </div>
          <div className="slide">
            <div className="slide__image slide-3-a" />
            <div className="slide__image slide-3-b" />
          </div>
        </Swiper>
      </div>
    </section>
  );
}

export default App;
