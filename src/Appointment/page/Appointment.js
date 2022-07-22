import React from "react";
import { ReactSVG } from "react-svg";
import Contacts from "../../shared/components/Contacts";
import Hero from "../../shared/components/Hero";
import Appointments from "../../Home/components/Appointment";
import phone from "../../assets/icons/phone.svg";
import bg_image from "../../assets/images/appointment-hero.svg";

import "./Appointment.css";

const Appointment = () => {
  const data_schedule = [
    { day: "Monday", time: "09:00 AM - 07:00 PM" },
    { day: "Tuesday", time: "09:00 AM - 07:00 PM" },
    { day: "Wednesday", time: "09:00 AM - 07:00 PM" },
    { day: "Thursday", time: "09:00 AM - 07:00 PM" },
    { day: "Friday", time: "09:00 AM - 07:00 PM" },
    { day: "Saturday", time: "09:00 AM - 07:00 PM" },
    { day: "Sunday", time: "09:00 AM - 07:00 PM" },
  ];
  return (
    <div className="appointment-container">
      <Hero
        title="Book an Appointment"
        subtitle="Appointment"
        image={bg_image}
      />
      <div className="appointment_content">
        <Appointments />
        <div className="appointment-schedule">
          <h1>Schedule hours</h1>
          <div className="appointment-schedule_items">
            {data_schedule.map((item) => (
              <div className="appointment-schedule_item" key={item.day}>
                <p className="appointment-schedule_item-name">{item.day}</p>
                <div className="appointment-schedule_item-tire"></div>
                <p className="appointment-schedule_item-time">{item.time}</p>
              </div>
            ))}
          </div>
          <div className="appointment-schedule_line"></div>
          <div className="topHeader-item">
            <ReactSVG src={phone} className="phone" />
            <div className="topHeader-item_content">
              <p className="topHeader-item_name">Emergency</p>
              <p className="topHeader-item-text">
                <a href="tel:(237) 681-812-255" className="topHeader-item-text">
                  (237) 681-812-255
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3006.3603064180065!2d28.987872815335994!3d41.104821479291154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2sru!4v1657961668460!5m2!1str!2sru"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: "0" }}
        className="maps"
      ></iframe>
      <Contacts />
    </div>
  );
};

export default Appointment;
