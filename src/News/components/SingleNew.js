import React from "react";

import "./SingleNew.css";
const SingleNew = (props) => {
  return (
    <div className="singlenew-wrapper">
      <img src={props.image} alt={props.name} />
    </div>
  );
};

export default SingleNew;
