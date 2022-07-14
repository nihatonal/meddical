import React from "react";

import { NavLink } from "react-router-dom";

import { SocialIcon } from "react-social-icons";
import "./Doctor_Card.css";

const DoctorCard = (props) => {
  return (
    <div className={`doctor_card-wrapper ${props.className}`} id={props.id}>
      <div className="doctor_card-profile-img">
        <img src={props.image} alt="doctor" />
      </div>

      <div className="doctor_card-info">
        <p className="doctor_card-info-name">{props.name}</p>
        <p className="doctor_card-info-profession">{props.person_profession}</p>
        <div className="doctor_card-info-links">
          <SocialIcon
            network="linkedin"
            bgColor="#1F2B6C;"
            style={{ height: 24, width: 24 }}
            className="social-icon"
          />
          <SocialIcon
            network="facebook"
            bgColor="#1F2B6C;"
            style={{ height: 24, width: 24 }}
            className="social-icon"
          />
          <SocialIcon
            network="instagram"
            bgColor="#1F2B6C;"
            style={{ height: 24, width: 24 }}
            className="social-icon"
          />
        </div>
      </div>
      <div className="doctor_card-btn">
        <NavLink to="/">View Profile</NavLink>
      </div>
    </div>
  );
};

export default DoctorCard;
