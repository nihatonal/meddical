import React from "react";

import Carousel from "../../shared/IU/Carousel";

import "./Doctors.css";

const Doctors = () => {
  return (
    <div className="doctors-wrapper">
      <div className="doctors-head">
        <p className="content-sub-title">Trusted Care</p>
        <h3 className="content-title">Our Doctors</h3>
      </div>
      <Carousel />
    </div>
  );
};

export default Doctors;
