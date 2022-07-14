import React from "react";
import { NavLink } from "react-router-dom";

import "./NavLinks.css";
const NavLinks = (props) => {
  return (
    <div className={`nav-wrapper ${props.className}`}>
      <NavLink className="nav-item" to="/" activeclassname="selected" onClick={props.onClickNavItem}>
        Home
      </NavLink>
      <NavLink className="nav-item" to="/aboutus" activeclassname="selected" onClick={props.onClickNavItem}>
        About us
      </NavLink>
      <NavLink className="nav-item" to="/services" activeclassname="selected" onClick={props.onClickNavItem}>
        Services
      </NavLink>
      <NavLink className="nav-item" to="/doctors" activeclassname="selected" onClick={props.onClickNavItem}>
        Doctors
      </NavLink>
      <NavLink className="nav-item" to="/news" activeclassname="selected" onClick={props.onClickNavItem}>
        News
      </NavLink>
      <NavLink className="nav-item" to="/contact" activeclassname="selected" onClick={props.onClickNavItem}>
        Contact
      </NavLink>
    </div>
  );
};

export default NavLinks;
