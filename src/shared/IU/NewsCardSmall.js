import React from "react";
import {FaEye} from "react-icons/fa";
import LikeBtn from './LikeBtn';
import "./News_Card_Small.css";

const NewsCardSmall = (props) => {
  return (
    <div className="news_card_small-wrapper">
      <div>
        <img src={props.image} alt="news" />
      </div>
      <div className="news_card_small-content">
        <p className="news_card_small-date">
          {props.date} | {props.author}
        </p>
        <p className="news_card_small-desc">
        {props.desc}
        </p>
        <div className="news_card_small-status">
          <p className="news_card_small-status-item"><FaEye className="faeye" /> {props.see} </p>
          <LikeBtn likes={props.likes}/>
          {/* <p className="news_card_small-status-item" onClick={props.onLike}><FaRegHeart className="faheart"/> {props.like} </p> */}
        </div>
      </div>
    </div>
  );
};

export default NewsCardSmall;
