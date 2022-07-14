import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
// import Modal from "./Modal";
import "./Carousel_news.css";

const carouselProperties = {
  prevArrow: null,
  nextArrow: null,
  dots: true,
  dotsClass: "button__bar",
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  className: "slide",
  rows: 2,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 3,
        vertical: true,
        verticalSwiping: true,
        centerMode: false,
      },
    },
    {
      breakpoint: 799,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        centerMode: false,
      },
    },
  ],
};
const CarouselNews = (props) => {
  //const [show, setShow] = useState(false);

  // const modalHandler = (x) => {
  //   const newItem = PetsData.find((item) => item.id === x);
  //   setPet(newItem);
  //   setShow(true);
  // };
  // const closeHandler = () => {
  //   setShow(false);
  // };

  return (
    <div className="container_multi">
      <Slider {...carouselProperties}>
        {props.children}
      </Slider>
      {/* <Modal
        className={show && "show-modal"}
        Close={closeHandler}
        img={pet.image}
        name={pet.name}
        breed={pet.breed}
        desc={pet.desc}
        age={pet.age}
        inoculations={pet.inoculations}
        diseases={pet.diseases}
        parasites={pet.parasites}
      /> */}
    </div>
  );
};

export default CarouselNews;
