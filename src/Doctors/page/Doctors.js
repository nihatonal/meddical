import React from "react";

import Contacts from "../../shared/components/Contacts";
import Hero from "../../shared/components/Hero";
import Testimonials from "../../shared/components/Testimonials";
import News from "../../shared/components/News";

import { Doctors_data } from "../../assets/Doctors_data";
import DoctorCard from "../../shared/IU/DoctorCard";

import doctors from '../../assets/images/doctors_hero.svg';

import "./Doctors.css";

const Doctors = () => {
  return (
    <div className="doctors-container">
      <Hero title="Our Doctors" subtitle="Doctors" image={doctors}/>
      <div className="doctors_content">

        {Doctors_data.map((item) => (
          <DoctorCard
            key={item.id}
            id={item.id}
            data={item}
            name={item.name}
            person_profession={item.person_profession}
            image={item.image}
          />
        ))}
      </div>

      <Testimonials />
      <News />
      <Contacts />
    </div>
  );
};

export default Doctors;
