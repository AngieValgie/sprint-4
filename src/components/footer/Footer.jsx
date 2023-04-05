import React from "react";
import "./footer.scss";
import { BiHomeHeart } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { BsPerson } from "react-icons/bs";
import { RxCounterClockwiseClock } from "react-icons/rx";

const Footer = () => {
  return (
    <div className="footerContainer">
      <BiHomeHeart className="footerContainer__icon" />
      <FiSearch className="footerContainer__icon" />
      <RxCounterClockwiseClock className="footerContainer__icon" />
      <BsPerson className="footerContainer__icon" />
    </div>
  );
};

export default Footer;
