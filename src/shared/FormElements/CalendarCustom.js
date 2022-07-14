import React from "react";
import styled from "styled-components";
// import 'react-calendar/dist/Calendar.css';

function CalendarCustom(props) {
  return (
    <CalendarContainer>
      {props.children}
    </CalendarContainer>
  );
}

export default CalendarCustom;

const CalendarContainer = styled.div`
  /* ~~~ container styles ~~~ */
  max-width: 350px;
  margin: auto;
  margin-top: 0;
  background-color: #bfd2f8;
  padding: 4px;
  border-radius: 3px;
  position:absolute;
  top:52px;
  left:0;

  /* ~~~ navigation styles ~~~ */
  .react-calendar__navigation {
    display: flex;

    .react-calendar__navigation__label {
      font-weight: bold;
    }

    .react-calendar__navigation__arrow {
      flex-grow: 0.333;
    }
  }

  /* ~~~ label styles ~~~ */
  .react-calendar__month-view__weekdays {
    color:#bfd2f8;
    background:#1F2B6C;

    text-align: center;
  }

  /* ~~~ button styles ~~~ */
  button {
    margin: 3px;
    background-color: #bfd2f8;
    border: 0;
    border-radius: 3px;
    color: black;
    padding: 5px 0;

    &:hover {
      background-color: #1F2B6C;
    }

    &:active {
      background-color: #1F2B6C;
    }
  }

  /* ~~~ day grid styles ~~~ */
  .react-calendar__month-view__days {
    display: grid !important;
    grid-template-columns: 14.2% 14.2% 14.2% 14.2% 14.2% 14.2% 14.2%;

    .react-calendar__tile {
      max-width: initial !important;
    }

    .react-calendar__tile--range {
      box-shadow: 0 0 6px 2px black;
    }
  }

  /* ~~~ neighboring month & weekend styles ~~~ */
  .react-calendar__month-view__days__day--neighboringMonth {
    background:rgba(204, 204, 204,0.5);
    color:rgb(153, 153, 153);
  }
  .react-calendar__month-view__days__day--weekend {
    color: red;
    background:rgba(191, 210, 248,0.5) ;
  }

  /* ~~~ other view styles ~~~ */
  .react-calendar__year-view__months,
  .react-calendar__decade-view__years,
  .react-calendar__century-view__decades {
    display: grid !important;
    grid-template-columns: 20% 20% 20% 20% 20%;

    &.react-calendar__year-view__months {
      grid-template-columns: 33.3% 33.3% 33.3%;
    }

    .react-calendar__tile {
      max-width: initial !important;
    }
  }
`;
