import React from "react";

import { FiCalendar } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import LikeBtn from "./LikeBtn";

import "./NewsCard.css";
const NewsCard = (props) => {
  return (
    <div className={`news_card-wrapper ${props.className}`} id={props.id}>
      <div>
        <img className='news_card-image' src={props.image} alt="news" />
      </div>
      <div className="news_card-content" id={props.id}>
        <div className="news_card-content-info">
          <p className="news_card-date content-desc">
            <FiCalendar className="fi-calendar" />
            {props.date}
          </p>
          <p className="news_card-author">
            <FiUser className="fi-user content-desc" />
            {props.author}
          </p>
          <p className="news_card-see content-desc">
            <FiEye className="fi-eye" /> {props.see}
          </p>
          <LikeBtn likes={props.likes} />
        </div>
        <h3 className="content-title">{props.title}</h3>
        <p className="content-desc news-desc">{props.desc.slice(0, 258)}...</p>
        <button className="news-readmore-btn" onClick={props.onClick}>
          Read More <FiArrowRight className="fi-arrow" />
        </button>
      </div>
    </div>
  );
};

export default NewsCard;
