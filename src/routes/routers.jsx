import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import SliderHome from "../components/home/sliderHome/sliderHome";
import HomeLogin from "../components/login/HomeLogin";
import Register from "../components/login/register/Register";

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SliderHome />} />
      <Route path="/homeLogin" element={<HomeLogin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
