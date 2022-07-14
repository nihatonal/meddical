import React, { useState } from "react";

import OutsideClickHandler from "../util/OutsideClickHandler";
import { RiArrowDownSLine } from "react-icons/ri";
import { RiArrowUpSLine } from "react-icons/ri";
import "./Select.css";

const Select = (props) => {
  const [showList, setShowList] = useState(false);
  const openHandler = () => {
    setShowList(true);
  };
  const onChangeHandler = (item) => {
    setShowList(false);
  };
  return (
    <>
      <OutsideClickHandler
        onOutsideClick={() => {
          setShowList(false);
        }}
      >
        {/* <img
          className="menu-dropdown"
          src={menu_dropdown}
          alt="menu-dropdown"
        /> */}
        
        <p
          className={`select-input ${props.classSelectInput}`}
          style={props.styleSelectInput}
          onClick={openHandler}
        >
          {props.value}
          {props.selected}
          {!showList ? <RiArrowDownSLine />: <RiArrowUpSLine />}
        </p>
        {showList && (
          <div id="droplist" className="droplist-container">
            {props.data.map((x) => (
              <div
                className={`droplist-item ${props.classItem}`}
                key={x.id}
                onChange={props.onChange}
              >
                <input
                  className="radio"
                  id={x.id}
                  type="radio"
                  name="selected-item"
                  value={x.name}
                  hidden
                  onClick={() => onChangeHandler()}
                />
                <label className={props.labelClassName} htmlFor={x.name}>
                  {x.name}<br></br>{x.person_profession}
                </label>
              </div>
            ))}
          </div>
        )}
      </OutsideClickHandler>
    </>
  );
};

export default Select;
