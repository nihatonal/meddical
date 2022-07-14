import React from "react";

import "./Logo.css";

const Logo = (props) => {
  return (
    <div>
      <h1 className={`logo ${props.className}`}>MED<span>DICAL</span></h1>
    </div>
  );
};

export default Logo;
