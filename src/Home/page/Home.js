import React, { useEffect } from "react";

import Hero from "../components/Hero";
import Wellcome from "../components/Wellcome";
import Services from "../components/Services";
import Specialties from "../components/Specialties";
import Appointment from "../components/Appointment";
import Doctors from "../../shared/components/Doctors";
import News from "../../shared/components/News";
import Contacts from "../../shared/components/Contacts";

import calendar from "../../assets/icons/calendar.svg";
import team from "../../assets/icons/team.svg";
import cash from "../../assets/icons/cash.svg";
import "./Home.css";

const Home = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <div className="home-wrapper">
      <Hero />
      <Wellcome />
      <Services />
      <Specialties />
      <Appointment />
      <Doctors />
      <News />
      <Contacts />

      <div className="hero-content-book">
        <div className="hero-content-book_item">
          <p>Book an Appointment</p>
          <img src={calendar} alt="calendar" />
        </div>
        <div className="hero-content-book_item">
          <p>Book an Appointment</p>
          <img src={team} alt="team" />
        </div>
        <div className="hero-content-book_item">
          <p>Book an Appointment</p>
          <img src={cash} alt="cash" />
        </div>
      </div>
    </div>
  );
};

export default Home;
