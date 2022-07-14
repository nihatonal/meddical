import React,{useEffect, useState} from "react";
import { ReactSVG } from "react-svg";
import { NavLink } from "react-router-dom";
import Contacts from "../../shared/components/Contacts";
import Hero from "../../shared/IU/Hero";

import services from "../../assets/images/hero_services.svg";
import arrow from "../../assets/icons/arrow.svg";
import service_image from "../../assets/images/service_card.svg";
import "./Services.css";

import { ServicesData } from "../../assets/ServicesData";
const Services = () => {
  const [anime, setAnime] =useState(false);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  return (
    <div className="services-container">
      <Hero title="Our Services" subtitle="Home / Services" image={services} />
      <div className="services-content-wrapper">
        {ServicesData.map((item) => (
          <div className="services-item" onMouseEnter={()=>setAnime(true)}>
            <div className={"services-icon-wrapper"}>
              <ReactSVG src={item.icon}  className="services-icon"/>
            </div>
            <img src={item.image} alt="service" />
            <div className="services-item-content">
              <h3 className="services-item-title">{item.name}</h3>
              <p className="content-desc">{item.short_desc}</p>
              <NavLink className="wellcome-btn service-btn" to={`/`}>
                Learn More
                <img src={arrow} alt="arrow" />
              </NavLink>
            </div>
          </div>
        ))}
      </div>
      <Contacts />
    </div>
  );
};

export default Services;
