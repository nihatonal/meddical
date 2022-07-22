import React, { useState } from "react";
import moment from "moment";

import Calendar from "react-calendar";
import CalendarCustom from "../../shared/FormElements/CalendarCustom";
import { Doctors_data } from "../../assets/Doctors_data";
import { Departments } from "../../assets/Departments";
import { Schedule } from "../../assets/Schedule";
import {
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/SignUpFrom-hook";
import Input from "../../shared/FormElements/Input";
import Select from "../../shared/FormElements/Select";
import OutsideClickHandler from "../../shared/util/OutsideClickHandler";

import { FaChevronDown } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa";

import "./Appointment.css";
import "react-calendar/dist/Calendar.css";

const Appointment = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },
      gender: {
        value: "",
        isValid: false,
      },
      email: {
        value: "",
        isValid: false,
      },
      phone: {
        value: "",
        isValid: false,
      },
      doctor: {
        value: "",
        isValid: false,
      },
      department: {
        value: "",
        isValid: false,
      },
      time: {
        value: "",
        isValid: false,
      },
      message: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  const genderData = [
    {
      id: "Man",
      name: "Man",
    },
    {
      id: "Woman",
      name: "Woman",
    },
  ];

  const [date, setDate] = useState(null);
  const [show, setShow] = useState(false);

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
    console.log(moment(date).format("DD/MM/YYYY"));
  };
  return (
    <div className="appointment-wrapper">
      <div className="appointment-head">
        <h3 className="content-title apponinment-title">Book an Appointment</h3>
        <p className="content-desc apponinment-desc">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          placerat scelerisque tortor ornare ornare. Convallis felis vitae
          tortor augue. Velit nascetur proin massa in. Consequat faucibus
          porttitor enim et.
        </p>
      </div>
      <form className="appointment-form" onSubmit={SubmitHandler}>
        <div className="appointment-form-inputs">
          <Input
            id="name"
            element="input"
            type="text"
            placeholder="Name"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            placeholderclassName="label"

          />
          <Input
            id="gender"
            element="select"
            type="text"
            placeholder="Gender"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            placeholderclassName="label"
            classNameWrapper="inputWrapper"
          >
            <Select
              data={genderData}
              value={
                formState.inputs.gender.value === ""
                  ? "Gender"
                  : formState.inputs.gender.value
              }
            />
          </Input>
          <Input
            id="email"
            element="input"
            type="text"
            placeholder="Email"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            placeholderclassName="label"
          />
          <Input
            id="phone"
            element="input"
            type="text"
            placeholder="Phone"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            placeholderclassName="label"
          />
          <div className="calendar-wrapper" onClick={() => setShow(true)}>
            <OutsideClickHandler
              onOutsideClick={() => {
                setShow(false);
              }}
            >
              {date ? (
                <p className="date-wrapper">
                  {moment(date).format("DD/MM/YYYY")}
                  {!show ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronUp onClick={() => setShow(false)} />
                  )}
                </p>
              ) : (
                <p className="date-wrapper">
                  Date
                  {!show ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronUp onClick={() => setShow(false)} />
                  )}
                </p>
              )}
              {/* <p>{date ? moment(date).format("DD/MM/YYYY") : `Date`}</p> */}
              {show && (
                <CalendarCustom>
                  <Calendar
                    value={date}
                    onChange={(value) => {
                      setDate(value);
                      setShow(false);
                    }}
                  />
                </CalendarCustom>
              )}
            </OutsideClickHandler>
          </div>

          <Input
            id="time"
            element="select"
            type="text"
            placeholder="Time"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            placeholderclassName="label"
          >
            <Select
              data={Schedule}
              value={
                formState.inputs.time.value === ""
                  ? "Time"
                  : formState.inputs.time.value
              }
            />
          </Input>
          <Input
            id="doctor"
            element="select"
            type="text"
            placeholder="Doctor"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            placeholderclassName="label"
            classNameWrapper="inputWrapper"
          >
            <Select
              data={Doctors_data}
              labelClassName="droplist-item_label_info_fix"
              value={
                formState.inputs.doctor.value === ""
                  ? "Doctor"
                  : formState.inputs.doctor.value
              }
            />
          </Input>
          <Input
            id="department"
            element="select"
            type="text"
            placeholder="Department"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            placeholderclassName="label"
            classNameWrapper="inputWrapper"
          >
            <Select
              data={Departments}
              value={
                formState.inputs.department.value === ""
                  ? "Department"
                  : formState.inputs.department.value
              }
            />
          </Input>
        </div>
        <Input
          id="message"
          element="textarea"
          type="text"
          placeholder="Message"
          textareaClass="textarea"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          labelclassName="label"
        />
        <button type="submit" className="btn-submit" onSubmit={SubmitHandler}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Appointment;
