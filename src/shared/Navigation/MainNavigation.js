import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import MainHeader from "./MainHeader";
import Logo from "./Logo";
import TopHeader from "./TopHeader";
import NavLinks from "./NavLinks";
import Hamburger from "./Hamburger";
import SideMenu from "./SideMenu";
import search from "../../assets/icons/search.svg";
import { FaSearch } from "react-icons/fa";
import "./MainNavigation.css";

const MainNavigation = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(true);

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };
  const handleSearch = () => {
    setSearchOpen(!searchOpen);
  };
  return (
    <MainHeader className={navbarOpen ? "to-small-header" : ""}>
      <div
        className={
          navbarOpen ? "close-top-header" : "mainheader-item open-top-header"
        }
      >
        <Logo className="display_none_mobile" />
        <TopHeader />
      </div>
      <div className="mainheader-item bottom-header">
        <NavLinks />
        <Logo className="logo-mobile display_none" />
        <div className="search-bar">
          <img src={search} alt="search" onClick={handleSearch} />
          <form
            action="http://www.google.com/search"
            method="get"
            target="_blank"
            className={searchOpen ? "form_big form_big_open" : "form_big"}
          >
            <input type="text" name="q" placeholder="Search" />
            <button type="submit" className="btn-search-wrapper">
              <FaSearch className="fa-search" />
            </button>
          </form>
          <Hamburger
            onClick={handleToggle}
            show={navbarOpen ? "active-hamburger" : ""}
          />
          <NavLink
            className="btn-appointment display_none_mobile"
            to="/appointment"
          >
            Appointment
          </NavLink>
        </div>
        <div
          className={
            searchOpen
              ? "search_input-wrapper display_none"
              : "search_input-wrapper display_none search-bar-show"
          }
        >
          <form
            action="http://www.google.com/search"
            method="get"
            target="_blank"
            className={searchOpen ? "form form_open" : "form"}
          >
            <input
              type="text"
              name="q"
              placeholder="Search"
              style={
                navbarOpen
                  ? { background: "#1F2B6C", borderTop: "1px solid #a5c2fd" }
                  : null
              }
            />
            <button type="submit" className="btn-search-wrapper">
              <FaSearch className="fa-search" />
            </button>
          </form>
        </div>
      </div>
      <SideMenu
        style={
          navbarOpen
            ? { opacity: 1, left: 0 }
            : navbarOpen
            ? { opacity: 0, left: -60 }
            : null
        }
        // onClickNav={}
        onClickNavItem={handleToggle}
      />
    </MainHeader>
  );
};

export default MainNavigation;
