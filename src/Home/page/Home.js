import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../components/Hero";
import Wellcome from "../components/Wellcome";
import Services from "../components/Services";
import Specialties from "../components/Specialties";
import Appointment from "../components/Appointment";
import Doctors from "../../shared/components/Doctors";
import News from "../../shared/components/News";
import Contacts from "../../shared/components/Contacts";

import { News_Data } from "../../assets/News_Data";
import calendar from "../../assets/icons/calendar.svg";
import team from "../../assets/icons/team.svg";
import cash from "../../assets/icons/cash.svg";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);

  const newsHandler = (e)=>{
    const filtered = News_Data.filter((news) => {
      return news.id === e.target.id;
    });
    navigate("/news/singlenew", {
      state: filtered,
    });
    console.log(filtered)
  }
  return (
    <div className="home-wrapper">
      <Hero />
      <Wellcome />
      <Services />
      <Specialties />
      <Appointment />
      <Doctors />
      <News onClick ={newsHandler}/>
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