import React from "react";

import { News_Data } from "../../assets/News_Data";

import "./Categories.css";

const Categories = (props) => {
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  var obj = {};
  News_Data.forEach(function(item) {
    obj[item.category] ? obj[item.category]++ : (obj[item.category] = 1);
  });
  const sortable = Object.entries(obj)
    .sort(([, a], [, b]) => a - b)
    .reduce((r, [k, v]) => ({ ...r, [k]: v }), {});

  const result = Object.keys(sortable).map((key) => {
    return (
      <div key={key} id={key} className="category-item" onClick={props.onClick}>
        <p className="category-name">{capitalizeFirstLetter(key)}</p>
        <p className="category-item_count">{obj[key]}</p>
      </div>
    );
  });
  return (
    <div className="category-wrapper">
      <h3 className="recents-title">Categories</h3>
      <div className="category-items">{result}</div>
    </div>
  );
};

export default Categories;
