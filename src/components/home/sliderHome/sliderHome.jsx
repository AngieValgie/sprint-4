import React, { useEffect, useState } from "react";
import "./sliderHome.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../../images/Svg.svg";
import img2 from "../../../images/Svg (1).svg";
import img3 from "../../../images/Svg (2).svg";
import { Link } from "react-router-dom";

const SliderHome = () => {
  return (
    <section className="sliderContain">
      <Carousel
        emulateTouch={true}
        showArrows={false}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        width={"100%"}
        infiniteLoop={true}
        className="carousel"
      >
        <div className="carouselImgContain">
          <img src={img1} className="carouselImg" />
          <p>
            Choose what to eat choosing from a variety of restaurants from the
            list
          </p>
        </div>
        <div className="carouselImgContain">
          <img src={img2} className="carouselImg" />
          <p>Choose where you want to deliver by indicating on the map</p>
        </div>
        <div className="carouselImgContain">
          <img src={img3} className="carouselImg" />
          <p>We will deliver as soon as possible</p>
        </div>
      </Carousel>
      <div className="btnStartContain">
        <Link to="/login" className="btnStart">
          Start
        </Link>
      </div>
    </section>
  );
};

export default SliderHome;
