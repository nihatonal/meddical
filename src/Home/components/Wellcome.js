import React from "react";
import { NavLink } from "react-router-dom";
import doctors from "../../assets/images/doctors.svg";
import doctors_mobile from "../../assets/images/doctors_wellcome_mobile.svg";
import arrow from "../../assets/icons/arrow.svg";
import "./Wellcome.css";

const Wellcome = () => {
  return (
    <div className="wellcome-wrapper">
      <div className="wellcome-content">
        <p className="content-sub-title">Welcome to Meddical</p>
        <h3 className="content-title wellcome-title">
          A Great Place to Receive Care
        </h3>
        <p className="content-desc wellcome-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
        <NavLink className="wellcome-btn" to="/more">
          Learn More
          <img src={arrow} alt="arrow" />
        </NavLink>
      </div>
      <div className="wellcome-img-wrapper">
        <img src={doctors} alt="doctors" className="display_none_mobile"/>
        <img src={doctors_mobile} alt="doctors" className="display_none"/>
        <div className="wellcome-line-wrapper">
          <div className="wellcome-line"></div>
          <div className="wellcome-line line_2"></div>
          <div className="wellcome-line line_3"></div>
        </div>
      </div>
    </div>
  );
};

export default Wellcome;
