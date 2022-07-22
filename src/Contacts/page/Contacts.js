import React from "react";

import Hero from "../../shared/components/Hero";
import Contact from "../../shared/components/Contacts";
import ContactForm from "../components/ContactForm";
import News from "../../shared/components/News";
import image from "../../assets/images/contact-hero.svg";
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts-container">
      <Hero title="Our Contacts" subtitle="Contact" image={image} />
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3006.3603064180065!2d28.987872815335994!3d41.104821479291154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1str!2sru!4v1657961668460!5m2!1str!2sru"
        width="992"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        style={{ border: "0" }}
        className="map"
      ></iframe>
      <div className="contacts-container_content">
        <ContactForm />
        <Contact />
      </div>
      <News />
    </div>
  );
};

export default Contacts;
