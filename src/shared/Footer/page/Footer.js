import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import plane from "../../../assets/icons/plane.svg";
import "./Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");

  const sendHandler = () => {
    alert(`Thanks for subscribing your email! ${email}`);
    setEmail("");
  };

  return (
    <div className="footer">
      <div className="footer_content">
        <div className="footer_logo">
          <h2 className="footer_logo-title">Meddical</h2>
          <p className="footer_logo-subtitle">
            Leading the Way in Medical Execellence, Trusted Care.
          </p>
        </div>
        <div className="footer_item">
          <h3 className="footer_item-title">Important Links</h3>
          <div className="footer_item-list">
            <NavLink to="/appointment" className="footer_item-list-el" activeclassname="selected">
              Appointment
            </NavLink>
            <NavLink to="/doctors" className="footer_item-list-el" activeclassname="selected">
              Doctors
            </NavLink>
            <NavLink to="/services" className="footer_item-list-el" activeclassname="selected">
              Services
            </NavLink>
            <NavLink to="/aboutus" className="footer_item-list-el" activeclassname="selected">
              About Us
            </NavLink>
          </div>
        </div>
        <div className="footer_item">
          <h3 className="footer_item-title">Contact Us</h3>
          <div className="footer_item-list">
            <p className="footer_item-list-el">
              <a href="tel:(237) 681-812-255" className="footer_item-list-el">
                Call: (237) 681-812-255
              </a>
            </p>
            <p className="footer_item-list-el">
              <a
                href="#/"
                className="footer_item-list-el"
                onClick={() => (window.location = "fildineeesoe@gmil.com")}
              >
                Email: fildineeesoe@gmil.com
              </a>
            </p>
            <p className="footer_item-list-el">
              <a
                href="https://www.google.com/maps/place/South+Park+Gardens/@51.4217638,-0.2011777,17z/data=!4m13!1m7!3m6!1s0x487608baa7401b31:0x18e66d9fcd2f7d77!2sSouth+Park+Court,+18+S+Park+Rd,+London+SW19+8TD,+Birle%C5%9Fik+Krall%C4%B1k!3b1!8m2!3d51.4202685!4d-0.2001799!3m4!1s0x487608b0444135a5:0x26ad24d16140d887!8m2!3d51.4222798!4d-0.1984674"
                target="_blank"
                rel="noopener noreferrer"
                className="footer_item-list-el"
              >
                Address: 0123 Some place
              </a>
            </p>
            <p className="footer_item-list-el">
              <a
                href="https://www.google.com/maps/place/South+Park+Gardens/@51.4217638,-0.2011777,17z/data=!4m13!1m7!3m6!1s0x487608baa7401b31:0x18e66d9fcd2f7d77!2sSouth+Park+Court,+18+S+Park+Rd,+London+SW19+8TD,+Birle%C5%9Fik+Krall%C4%B1k!3b1!8m2!3d51.4202685!4d-0.2001799!3m4!1s0x487608b0444135a5:0x26ad24d16140d887!8m2!3d51.4222798!4d-0.1984674"
                target="_blank"
                rel="noopener noreferrer"
                className="footer_item-list-el"
              >
                Some Country
              </a>
            </p>
          </div>
        </div>
        <div className="footer_item">
          <h3 className="footer_item-title">Newsletter</h3>
          <div className="footer_item-input-wrapper">
            <input
              className="footer_item-input"
              placeholder="Enter your email address"
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <img
              src={plane}
              alt="plane"
              className="footer_item-input-icon"
              onClick={sendHandler}
            />
          </div>
        </div>
      </div>
      <div className="footer_bottom-content">
        <p className="footer-copyright">
          © 2021 Hospital’s name All Rights Reserved by PNTEC-LTD
        </p>
        <div className="footer-social-icons">
          <SocialIcon
            network="linkedin"
            style={{ height: 24, width: 24 }}
            className="footer-social-icon"
            bgColor="#BFD2F8"
          />
          <SocialIcon
            network="facebook"
            bgColor="#BFD2F8"
            style={{ height: 24, width: 24 }}
            className="footer-social-icon"
          />
          <SocialIcon
            network="instagram"
            bgColor="#BFD2F8"
            style={{ height: 24, width: 24 }}
            className="footer-social-icon"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
