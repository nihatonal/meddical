import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import { Doctors_data } from "../../assets/Doctors_data";
// import Modal from "./Modal";
import DoctorCard from "./DoctorCard";
import "./Carousel.css";

const Carousel = (props) => {
  const [imageIndex, setImageIndex] = useState(0);

  const carouselProperties = {
    prevArrow: null,
    nextArrow: null,
    dots: true,
    dotsClass: "button__bar",
    infinite: true,
    lazyLoad: true,
    speed: 500,
    swipeToSlide: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 3,
    className: "slide",
    beforeChange: (current, next) => {
      console.log(next);
      setImageIndex(next);
    },
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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


  // const modalHandler = (x) => {
  //   const newItem = PetsData.find((item) => item.id === x);
  //   setPet(newItem);
  //   setShow(true);
  // };
  // const closeHandler = () => {
  //   setShow(false);
  // };

  return (
    <div className="container">
      <Slider {...carouselProperties}>
        {/* <Card item={item} click={modalHandler} /> */}
        {Doctors_data.map((item, idx) => (
          <div
          key={idx}
            className={
              idx === imageIndex
                ? "slide activeSlide"
                : idx === imageIndex - 1
                ? "slide left-slide"
                : idx === imageIndex + 1
                ? "slide right-slide"
                : "slide opacity"
            }
          >
            <DoctorCard
              key={item.id}
              id={item.id}
              data={item}
              name={item.name}
              person_profession={item.person_profession}
              image={item.image}
            />
          </div>
        ))}
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

export default Carousel;
