import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { TestimonialData } from "../../assets/TestimonialData";
import "./CarouselTestimonials.css";

const CarouselTestimonials = () => {
  

  const carouselProperties = {
    prevArrow: null,
    nextArrow: null,
    dots: true,
    dotsClass: "button__bar",
    infinite: true,
    lazyLoad: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1 ,
    initialSlide: 0,
    className: "slide",
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 799,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };


  return (
    <div className="container_testimonials">
      <Slider {...carouselProperties}>
        {TestimonialData.map((item, idx) => (
          <div
          key={idx}
          >
            <div className="testimonial_content">
              <p className="testimonial_content-desc">{item.testimonial}</p>
              <div className="testimonial_content-line"></div>
              <p className="testimonial_content-author">{item.author}</p>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default CarouselTestimonials;
