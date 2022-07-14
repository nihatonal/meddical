import React from "react";

import doctors from "../../assets/images/women_doctors.svg";

import "./Wellcome.css";

const Wellcome = () => {
  return (
    <div className="wellcome-container">
      <div className="wellcome_content-wrapper">
        <img src={doctors} alt="doctors" />

        <div className="wellcome_content">
          <h3>Welcome to Hospital name</h3>
          <h1>Best Care for Your Good Health</h1>

          <ul className="wellcome_content-list">
            <li>A Passion for Healing</li>
            <li>All our best</li>
            <li>Always Caring</li>
            <li>5-star Care</li>
            <li>Believe in Us</li>
            <li>A Legacy of Excellence</li>
          </ul>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque tortor ornare ornare. Quisque placerat
            scelerisque tortor ornare ornare Convallis felis vitae tortor augue.
            Velit nascetur proin massa in. Consequat faucibus porttitor enim et.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
            placerat scelerisque. Convallis felis vitae tortor augue. Velit
            nascetur proin massa in.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Wellcome;
