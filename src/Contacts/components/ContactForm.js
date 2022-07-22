import React from "react";

import { VALIDATOR_REQUIRE } from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/SignUpFrom-hook";
import Input from "../../shared/FormElements/Input";

import "./ContactForm.css";

const ContactForm = () => {
  const [formState, inputHandler] = useForm(
    {
      name: {
        value: "",
        isValid: false,
      },

      email: {
        value: "",
        isValid: false,
      },
      subject: {
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

  const SubmitHandler = (e) => {
    e.preventDefault();
    console.log(formState.inputs);
  };
  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={SubmitHandler}>
        <div className='contact-form-items'>
          <Input
            id="name"
            element="input"
            type="text"
            placeholder="Name"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            placeholderclassName="label"
            classNameWrapper="item_name"
          />
          <Input
            id="email"
            element="input"
            type="text"
            placeholder="Email"
            validators={[VALIDATOR_REQUIRE()]}
            onInput={inputHandler}
            placeholderclassName="label"
            classNameWrapper="item_email"
          />
        </div>

        <Input
          id="subject"
          element="input"
          type="text"
          placeholder="Subject"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          placeholderclassName="label"
          classNameWrapper="item_subject"
        />

        <Input
          id="message"
          element="textarea"
          type="text"
          placeholder="Message"
          textareaClass="textarea"
          validators={[VALIDATOR_REQUIRE()]}
          onInput={inputHandler}
          labelclassName="label"
          classNameWrapper="item_message"
        />
        <button type="submit" className="btn-submit" onSubmit={SubmitHandler}>
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
