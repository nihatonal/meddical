import React from "react";

import elipse from '../../assets/images/hero_elipse.svg';
import "./Hero.css";

const Hero = (props) => {
  return (
    <div className="hero-container">
      <div className="hero_content">
        <p>{props.subtitle}</p>
        <h1>{props.title}</h1>
      </div>
      <div className="hero_line-wrapper">
        <div className="hero_line"></div>
        <div className="hero_line"></div>
        <div className="hero_line"></div>
      </div>
      <img src={elipse} alt='elipse'className='hero_elipses' />
      <img src={props.image} alt='elipse' className='hero_image'/>
    </div>
  );
};

export default Hero;
