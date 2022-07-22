import React, { useState, useContext, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Contact from "../../shared/components/Contacts";
import Hero from "../../shared/components/Hero";
import RecentNews from "../components/RecentNews";
import SearchBar from "../components/SearchBar";
import Categories from "../components/Categories";
import { News_Data } from "../../assets/News_Data";
import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";
import { ShareContext } from "../../shared/context/share-contex";

import image_hero from "../../assets/images/single_new-hero.svg";

import { FiCalendar } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import { FiArrowRight } from "react-icons/fi";
import LikeBtn from "../../shared/IU/LikeBtn";
import { FiArrowLeft } from "react-icons/fi";
import "./SingleNew.css";

const SingleNew = (props) => {
  const navigate = useNavigate();
  const location = useLocation();
  const share = useContext(ShareContext);
  const [value, setValue] = useState("");
  const [newData, setNewData] = useState();
  const { width } = useWindowDimensions();

  const [data, setData] = useState(News_Data);
  const [filteredData, setFilteredData] = useState(News_Data);

  useEffect(() => {
    if (location.state.length > 0) {
      setNewData(location.state[0]);
    } else {
      const filtered = filteredData.filter((item) => {
        return item.id === location.state.id;
      });
      setNewData(filtered[0]);
    }

    window.scrollTo({ top: 0, left: 0 });
  }, [share.news]);

  const categoryHandler = (e) => {
    e.preventDefault();
    const filtered = filteredData.filter((category) => {
      return category.category === e.target.id;
    });
    setData(filtered);
    share.news = filtered;
    navigate("/news");
  };

  const onChangeHandler = (e) => {
    setValue(e.target.value);
    if (e.target.value === "") {
      setData(News_Data);
    }
  };

  const searchHandler = () => {
    const filtered = filteredData.filter((item) => {
      if (!value) return true;
      if (item.title.includes(value) || item.desc.includes(value)) {
        return true;
      }
    });
    share.news = filtered;
    share.search = value;
    setData(filtered);
    navigate("/news");
  };

  function capitalizeTheFirstLetterOfEachWord(words) {
    var separateWord = words.toLowerCase().split(" ");
    for (var i = 0; i < separateWord.length; i++) {
      separateWord[i] =
        separateWord[i].charAt(0).toUpperCase() + separateWord[i].substring(1);
    }
    return separateWord.join(" ");
  }

  const info_new = (
    <div className="news_card-content-info">
      <p className="news_card-date content-desc">
        <FiCalendar className="fi-calendar" />
        {newData && newData.date}
      </p>
      <p className="news_card-author">
        <FiUser className="fi-user content-desc" />
        {newData && newData.author}
      </p>
      <p className="news_card-see content-desc">
        <FiEye className="fi-eye" /> {newData && newData.see}
      </p>
      <LikeBtn likes={newData && newData.like} />
    </div>
  );

  const nextHandler = () => {
    const index = filteredData.findIndex((object) => {
      return object.id === newData.id;
    });

    if (index < filteredData.length - 1) {
      setNewData(filteredData[index + 1]);
    } else {
      setNewData(filteredData[1]);
    }
    if (width > 600) {
      window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 320, left: 0, behavior: "smooth" });
    }
  };
  const previousHandler = () => {
    const index = filteredData.findIndex((object) => {
      return object.id === newData.id;
    });
    
    if (index > 0) {
      setNewData(filteredData[index - 1]);
    } else {
      setNewData(filteredData[17]);
    }
    if (width > 600) {
      window.scrollTo({ top: 450, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 320, left: 0, behavior: "smooth" });
    }
  };

  const setRecentNewHandler = (e) => {
    const filtered = filteredData.filter((news) => {
      return news.id === e.target.id;
    });
    setNewData(filtered[0]);
  };

  return (
    <div className="single_new-container">
      <Hero
        title={newData && newData.title}
        subtitle={
          newData &&
          `News / ${capitalizeTheFirstLetterOfEachWord(newData.category)}`
        }
        image={image_hero}
        info={info_new}
      />
      <div className="single_new-wrapper">
        <div className="single_new-wrapper-item">
          <img src={newData && newData.image} alt={newData && newData.name} />
          <div className="single_new-info-mobile">{info_new}</div>
          <p className="single_new-desc">{newData && newData.desc}</p>
          <div className="single_new-btns">
            <button
              className="single_new-btn"
              onClick={() => previousHandler()}
            >
              <FiArrowLeft className="fi_left" />
              Previous Article
            </button>
            <button className="single_new-btn" onClick={() => nextHandler()}>
              Next Article
              <FiArrowRight className="fi_right" />
            </button>
          </div>
        </div>
        <div className="news_content-right">
          <SearchBar
            onChange={onChangeHandler}
            value={value}
            onClick={searchHandler}
          />
          <RecentNews onClick={setRecentNewHandler} />
          <Categories onClick={categoryHandler} />
        </div>
      </div>
      <Contact />
    </div>
  );
};

export default SingleNew;
