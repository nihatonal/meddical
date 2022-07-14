import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavigation from "./shared/Navigation/MainNavigation";
import Home from "./Home/page/Home";
import Footer from "./shared/Footer/page/Footer";

import AboutUs from "./AboutUs/page/AboutUs";
import Services from "./Services/page/Services";
import "./App.css";

function App() {
  
  return (
    <BrowserRouter>
      <MainNavigation />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/services" element={<Services />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
