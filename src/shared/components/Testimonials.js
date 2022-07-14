import React from "react";

import CarouselTestimonials from "../IU/CarouselTestimonials";

import quotes from '../../assets/icons/quotes.svg';
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="testimonials-wrapper">
      <img src={quotes} alt='quotes' />
      <CarouselTestimonials />
    </div>
  );
};

export default Testimonials;
