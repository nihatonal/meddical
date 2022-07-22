import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";

import Contacts from "../../shared/components/Contacts";
import Doctors from "../../shared/components/Doctors";
import Hero from "../../shared/components/Hero";

import { ServicesData } from "../../assets/ServicesData";
import "./SingleService.css";

const SingleService = () => {
  const [selected, setSelected] = useState("Free Checkup");
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  useEffect(() => {
    const storedSelected = localStorage.getItem("service", selected);

    const service = ServicesData.find((item) => item.name === storedSelected);
    setSelected(service);
  }, [selected]);

  const serviceHandler = (selected) => {
    setSelected(selected);
    localStorage.setItem("service", selected);
  };

  return (
    <div className="single_service-container">
      <Hero
        title={selected && selected.name}
        subtitle="Services"
        image={selected && selected.image_hero}
      />
      <div className="single_service-wrapper">
        <div className="single_service-items">
          {ServicesData.map((item) => (
            <div
              className={
                item.name === selected.name
                  ? "single_service-item active_service"
                  : "single_service-item"
              }
              key={item.name}
              onClick={() => serviceHandler(item.name)}
            >
              <ReactSVG
                src={item.icon}
                id={item.name === selected.name ? "active_service_path" : null}
                className="single_service-item-icon"
              />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
        <div className="single_service-content">
          <img src={selected && selected.image_big} alt="service" />
          <h3 className="content-title">{selected && selected.title}</h3>
          <ul className="single_service-content-list">
            {selected.list &&
              selected.list.map((item) => <li key={item.name}>{item}</li>)}
          </ul>
          <p className="content-desc">{selected && selected.desc}</p>
          <p className="content-desc">{selected && selected.short_desc}</p>
        </div>
      </div>
      <Doctors />
      <Contacts />
    </div>
  );
};

export default SingleService;
