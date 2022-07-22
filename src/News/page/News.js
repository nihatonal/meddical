import React, { useState, useMemo, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../shared/components/Hero";
import Contact from "../../shared/components/Contacts";
import Pagination from "../components/Pagination";
import RecentNews from "../components/RecentNews";
import Categories from "../components/Categories";
import SearchBar from "../components/SearchBar";
// import SingleNew from "../components/SingleNew";
import { useWindowDimensions } from "../../shared/hooks/useWindowDimensions";
import { ShareContext } from "../../shared/context/share-contex";

import NewsCard from "../../shared/IU/NewsCard";
import image_hero from "../../assets/images/news-hero.svg";
import { News_Data } from "../../assets/News_Data";

import "./News.css";

const News = () => {
  const navigate = useNavigate();
  const share = useContext(ShareContext);
  const [value, setValue] = useState("");
  const [modalData, setModalData] = useState();
  const { width } = useWindowDimensions();
  let PageSize = 4;

  const [data, setData] = useState(News_Data);
  const [filteredData, setFilteredData] = useState(News_Data);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (share.news != null) {
      setData(share.news);
      setValue(share.search);
      if (width > 600) {
        window.scrollTo({ top: 410, left: 0, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 1250, left: 0, behavior: "smooth" });
      }
    }
  }, [share.news]);

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return data.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, filteredData, data]);

  const pageHandler = (page) => {
    setCurrentPage(page);
    if (width > 600) {
      window.scrollTo({ top: 410, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 1250, left: 0, behavior: "smooth" });
    }
  };

  const categoryHandler = (e) => {
    e.preventDefault();
    const filtered = filteredData.filter((category) => {
      return category.category === e.target.id;
    });
    setCurrentPage(1);
    setData(filtered);
    if (width > 600) {
      window.scrollTo({ top: 410, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 1250, left: 0, behavior: "smooth" });
    }
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
    if (width > 600) {
      window.scrollTo({ top: 410, left: 0, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 1250, left: 0, behavior: "smooth" });
    }
    setData(filtered);
  };

  const setNewHandler = (e) => {
    const filtered = filteredData.filter((news) => {
      return news.id === e.target.parentNode.id;
    });
    navigate("/news/singlenew", {
      state: filtered,
    });
  };

  const setRecentNewHandler = (e) => {
    const filtered = filteredData.filter((news) => {
      return news.id === e.target.id;
    });
    navigate("/news/singlenew", {
      state: filtered,
    });
  };

  return (
    <div className="news-container">
      <Hero title="Blog Posts" subtitle="News" image={image_hero} />
      <div className="news_wrapper">
        <div className="news_content-left">
          {currentTableData.map((item) => {
            return (
              <NewsCard
                id={item.id}
                className="newscard-item"
                key={item.id}
                date={item.date}
                author={item.author}
                likes={item.like}
                see={item.see}
                sum={item.sum}
                image={item.image}
                title={item.title}
                desc={item.desc}
                onClick={setNewHandler}
              />
            );
          })}
          <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={data.length}
            pageSize={PageSize}
            onPageChange={(page) => pageHandler(page)}
          />
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

export default News;
