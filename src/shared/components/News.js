import React from "react";
import CarouselNews from "../../shared/IU/CarouselNews";
import { News_Data } from "../../assets/News_Data";
import NewsCardSmall from "../../shared/IU/NewsCardSmall";
import "./News.css";

const News = (props) => {

  return (
    <div className="news-wrapper">
      <div className="services-head news-head">
        <p className="content-sub-title news-title">
          Better information, Better health
        </p>
        <h3 className="content-title">News</h3>
      </div>
      <CarouselNews>
        {News_Data.map((item) => (
          <NewsCardSmall
            key={item.id}
            date={item.date}
            author={item.author}
            likes={item.like}
            see={item.see}
            sum={item.sum}
            image={item.image}
            onClick={props.onClick}
            id={item.id}
          />
        ))}
      </CarouselNews>
    </div>
  );
};

export default News;
