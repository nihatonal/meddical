import React from "react";

import { News_Data } from "../../assets/News_Data";
import "./RecentNews.css";

const RecentNews = (props) => {


  const recents = News_Data.sort(function(a, b) {
    return new Date(b.date) - new Date(a.date);
  }).slice(0, 6);

  return (
    <div className="news_content-recents">
      <h3 className="recents-title">Recent Posts</h3>
      <div className="recents-items_wrapper">
        {recents.map((item) => (
          <div
            key={item.id}
            id={item.id}
            className="recents-item"
            onClick={props.onClick}
          >
            <img
              className="recent-item_image"
              src={item.image}
              alt={item.name}
            />
            <div className="recent-item_content">
              <p>{item.date}</p>
              <p>{item.sum}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentNews;
