import React from "react";
import { NavLink } from "react-router-dom";
import doctor_hero from "../../assets/images/doctor_hero_big.svg";
import doctor_mobile from "../../assets/images/doctor_hero-mob.svg";

import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-wrapper">
      <div className="display_none_mobile"></div>
      <img
        src={doctor_hero}
        alt="doctor"
        className="display_none_mobile"
      />
      {/* mobile hero-image */}
      <img src={doctor_mobile} alt="doctor" className="display_none" />

      <div className="hero-content">
        <p className="content-sub-title">Caring for Life</p>
        <h3 className="content-title hero-title">
          Leading the Way<br></br>in Medical Excellence
        </h3>
        <NavLink className="hero-content-btn" to="/services">
          Our Services
        </NavLink>
      </div>
    </div>
  );
};

export default Hero;
