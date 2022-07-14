import React from "react";

import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts-wrapper">
      <div className="contact-head">
        <p className="content-sub-title">Get in touch</p>
        <h3 className="content-title">Contacts</h3>
      </div>
      <div className="contacts-items-wrapper">
        <div className="contacts-item">
          <div className="contacts-item-content">
            <svg
              width="41"
              height="39"
              viewBox="0 0 41 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.1459 33.1262C24.7274 32.7905 25.1502 32.2347 25.3211 31.5811C25.492 30.9275 25.3972 30.2296 25.0574 29.6411L23.7761 27.4219C23.4363 26.8333 22.8794 26.4022 22.2279 26.2235C21.5764 26.0447 20.8837 26.1329 20.3021 26.4687C15.9167 29.0006 13.3542 24.5622 12.0729 22.343C10.7917 20.1238 8.22919 15.6854 12.6146 13.1535C13.1962 12.8178 13.6189 12.2619 13.7899 11.6084C13.9608 10.9548 13.8659 10.2569 13.5261 9.66835L12.2449 7.44916C11.905 6.8606 11.3481 6.42952 10.6966 6.25075C10.0451 6.07199 9.35243 6.16019 8.77089 6.49594C3.28908 9.66086 1.28125 13.779 7.6875 24.875C14.0938 35.9709 18.6641 36.2911 24.1459 33.1262Z"
                stroke="#1F2B6C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M35.8156 23.9621C36.9804 19.4989 36.3314 14.7346 34.0113 10.716C31.6911 6.69743 27.8896 3.75324 23.442 2.53032M29.1022 22.12C29.4492 20.7945 29.5325 19.4104 29.3472 18.0469C29.162 16.6835 28.712 15.3672 28.0227 14.1735C27.3335 12.9798 26.4187 11.9319 25.3305 11.0897C24.2423 10.2476 23.002 9.62766 21.6806 9.26539M22.4248 20.2645C22.6577 19.3714 22.5278 18.4181 22.0635 17.6141C21.5993 16.81 20.8387 16.2208 19.9488 15.9759"
                stroke="#1F2B6C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h4 className="contacts-item-title">Emergency</h4>
            <p className="contacts-item-text">
              <a href="tel:(237) 681-812-255" className="contacts-item-text">
                (237) 681-812-255
              </a>
            </p>
            <p className="contacts-item-text">
              <a href="tel:(237) 666-331-894" className="contacts-item-text">
                (237) 666-331-894
              </a>
            </p>
          </div>
        </div>
        <div className="contacts-item">
          <div className="contacts-item-content">
            <svg
              width="32"
              height="39"
              viewBox="0 0 32 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 15.4C1 29.8 16 37 16 37C16 37 31 29.8 31 15.4C31 7.45 24.2875 1 16 1C7.7125 1 1 7.45 1 15.4Z"
                stroke="#BFD2F8"
                strokeWidth="2"
              />
              <path
                d="M15.9998 20.32C18.8496 20.32 21.1598 18.0098 21.1598 15.16C21.1598 12.3102 18.8496 10 15.9998 10C13.1501 10 10.8398 12.3102 10.8398 15.16C10.8398 18.0098 13.1501 20.32 15.9998 20.32Z"
                stroke="#BFD2F8"
                strokeWidth="2"
              />
            </svg>

            <h4 className="contacts-item-title">Location</h4>
            <p className="contacts-item-text">
              <a
                href="https://www.google.com/maps/place/South+Park+Gardens/@51.4217638,-0.2011777,17z/data=!4m13!1m7!3m6!1s0x487608baa7401b31:0x18e66d9fcd2f7d77!2sSouth+Park+Court,+18+S+Park+Rd,+London+SW19+8TD,+Birle%C5%9Fik+Krall%C4%B1k!3b1!8m2!3d51.4202685!4d-0.2001799!3m4!1s0x487608b0444135a5:0x26ad24d16140d887!8m2!3d51.4222798!4d-0.1984674"
                target="_blank"
                rel="noopener noreferrer"
                className="contacts-item-text"
              >
                0123 Some place
              </a>
            </p>
            <p className="contacts-item-text">
              <a
                href="https://www.google.com/maps/place/South+Park+Gardens/@51.4217638,-0.2011777,17z/data=!4m13!1m7!3m6!1s0x487608baa7401b31:0x18e66d9fcd2f7d77!2sSouth+Park+Court,+18+S+Park+Rd,+London+SW19+8TD,+Birle%C5%9Fik+Krall%C4%B1k!3b1!8m2!3d51.4202685!4d-0.2001799!3m4!1s0x487608b0444135a5:0x26ad24d16140d887!8m2!3d51.4222798!4d-0.1984674"
                target="_blank"
                rel="noopener noreferrer"
                className="contacts-item-text"
              >
                9876 Some country
              </a>
            </p>
          </div>
        </div>
        <div className="contacts-item">
          <div className="contacts-item-content">
            <svg
              width="39"
              height="32"
              viewBox="0 0 39 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.7998 1H37.1998V30.5H1.7998V1Z"
                stroke="#1F2B6C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M37.1998 6.89996L19.4998 18.7L1.7998 6.89996"
                stroke="#1F2B6C"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <h4 className="contacts-item-title">Email</h4>
            <p className="contacts-item-text">
              <a
                href="#/"
                className="contacts-item-text"
                onClick={(e) => {
                  e.preventDefault();
                  window.location = "fildineeesoe@gmil.com";
                }}
              >
                fildineeesoe@gmil.com
              </a>
            </p>
            <p className="contacts-item-text">
              <a
                href="#/"
                className="contacts-item-text"
                onClick={(e) => {
                  e.preventDefault();
                  window.location = "myebstudios@gmail.com";
                }}
              >
                myebstudios@gmail.com
              </a>
            </p>
          </div>
        </div>
        <div className="contacts-item">
          <div className="contacts-item-content">
            <svg
              width="33"
              height="32"
              viewBox="0 0 33 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6777 31C24.962 31 31.6777 24.2843 31.6777 16C31.6777 7.71573 24.962 1 16.6777 1C8.39346 1 1.67773 7.71573 1.67773 16C1.67773 24.2843 8.39346 31 16.6777 31Z"
                stroke="#1F2B6C"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M21.6777 23.5L16.6777 16V6"
                stroke="#1F2B6C"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            <h4 className="contacts-item-title">Working Hours</h4>
            <p className="contacts-item-text">Mon-Sat 09:00-20:00</p>
            <p className="contacts-item-text">Sunday Emergency only</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
