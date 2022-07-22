import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Home from "./Home/page/Home";
import Footer from "./shared/Footer/page/Footer";

import AboutUs from "./AboutUs/page/AboutUs";
import Services from "./Services/page/Services";
import SingleService from "./Services/page/SingleService";
import Doctors from "./Doctors/page/Doctors";
import Appointment from "./Appointment/page/Appointment";
import Contacts from "./Contacts/page/Contacts";
import News from "./News/page/News";
import SingleNew from "./News/page/SingleNew";

import "./App.css";

function App() {
  let storedSelected;

  useEffect(() => {
    storedSelected = localStorage.getItem("service");
  }, [storedSelected]);

  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/services" element={<Services />} />
        <Route
          exact
          path="/services/singleservice"
          element={<SingleService />}
        />
        <Route exact path="/doctors" element={<Doctors />} />
        <Route exact path="/appointment" element={<Appointment />} />
        <Route exact path="/contact" element={<Contacts />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/news/singlenew" element={<SingleNew />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
