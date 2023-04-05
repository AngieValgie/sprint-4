import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import SliderHome from "../components/home/sliderHome/sliderHome";
import HomeLogin from "../components/login/HomeLogin";
import Register from "../components/login/register/Register";
import ConfirmCode from "../components/login/confirmCode/ConfirmCode";
const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<SliderHome />} />
      <Route path="/login" element={<HomeLogin />} />
      <Route path="/register" element={<Register />} />
      <Route path="/home" element={<Home />} />
      <Route path="/codeV" element={<ConfirmCode />} />
    </Routes>
  </BrowserRouter>
);

export default Routers;
