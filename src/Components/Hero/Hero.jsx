import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <h2>WELCOME TO PETWELL</h2>
        <div>
          <div className="hero-hand-icon">
            <p>WHERE</p>
          </div>
          <p>WELLNESS</p>
          <p>BEGINS....</p>
        </div>
        <div className="hero-latest-btn">
          <div>Chat with us</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
