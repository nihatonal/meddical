import React from "react";

import { FiSearch } from "react-icons/fi";
import "./SearchBar.css";

const SearchBar = (props) => {
  return (
    <div className="searchbar-wrapper">
      <input
        type="text"
        name="q"
        placeholder="Search"
        value={props.value}
        onChange={props.onChange}
      />
      <FiSearch className="fi-search" onClick={props.onClick} />
    </div>
  );
};

export default SearchBar;
