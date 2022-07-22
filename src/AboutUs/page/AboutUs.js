import React,{useEffect} from "react";

import Doctors from "../../shared/components/Doctors";
import News from "../../shared/components/News";
import Contacts from "../../shared/components/Contacts";
import doctors from "../../assets/images/hero_doctors.svg";
import Hero from "../../shared/components/Hero";
import Testimonials from "../../shared/components/Testimonials";
import Wellcome from "../components/Wellcome";

import "./About.css";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  }, []);
  return (
    <div className="about-container">
      <Hero title="About us" subtitle="About" image={doctors} />
      <Wellcome />
      <Testimonials />
      <Doctors />
      <News />
      <Contacts />
    </div>
  );
};

export default AboutUs;
