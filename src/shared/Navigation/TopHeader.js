import React from "react";

import phone from "../../assets/icons/phone.svg";
import clock from "../../assets/icons/clock.svg";
import place from "../../assets/icons/place.svg";
import "./TopHeader.css";

const TopHeader = (props) => {
  return (
    <div className={`topHeader ${props.className}`}>
      <div className="topHeader-item">
        <img src={phone} alt="phone" />
        <div className="topHeader-item_content">
          <p className="topHeader-item_name">Emergency</p>
          <p className="topHeader-item-text">(237) 681-812-255</p>
        </div>
      </div>
      <div className="topHeader-item">
        <img src={clock} alt="clock" />
        <div className="topHeader-item_content">
          <p className="topHeader-item_name">Work Hour</p>
          <p className="topHeader-item-text">09:00 - 20:00 Everyday</p>
        </div>
      </div>
      <div className="topHeader-item">
        <img src={place} alt="place" />
        <div className="topHeader-item_content">
          <p className="topHeader-item_name">Location</p>
          <p className="topHeader-item-text">0123 Some Place</p>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
