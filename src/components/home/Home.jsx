import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../images/Maskgroup.svg";
import img2 from "../../images/Maskgroup(1).svg";
import img3 from "../../images/Maskgroup(2).svg";
import img4 from "../../images/Maskgroup(3).svg";
import ReactStars from "react-rating-stars-component";
import "./home.scss";
import Footer from "../footer/Footer";
import promoImg1 from "../../images/Promo1.svg";
import { BsFillGeoAltFill } from "react-icons/bs";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const Home = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    console.log(width);
  }, [width]);
  return (
    <section className="home">
      <div className="maps">
        <BsFillGeoAltFill className="icon" />
        <div className="mapsTxt">
          <p className="p1">DELIVER TO</p>
          <p className="p2">882 Well St, New-York</p>
        </div>
      </div>

      <Carousel
        emulateTouch={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={width >= 768 ? 30 : 80}
        className="carouselHome"
      >
        <div className="carouselImgContainHome">
          <img src={promoImg1} className="carouselImg" />
        </div>
        <div className="carouselImgContainHome">
          <img src={promoImg1} className="carouselImg" />
        </div>
        <div className="carouselImgContainHome">
          <img src={promoImg1} className="carouselImg" />
        </div>
      </Carousel>
      <p>Restaurants and cafes</p>

      <Carousel
        emulateTouch={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={width >= 768 ? 30 : 80}
        className="carouselHome"
      >
        <div className="">
          <button>All</button>
        </div>
        <div className="">
          <button>Fast food</button>
        </div>
        <div className="">
          <button>Pizza</button>
        </div>
        <div className="">
          <button>Pasta</button>
        </div>
        <div className="">
          <button>Fruits</button>
        </div>
      </Carousel>

      <div className="productsContain">
        <div className="product">
          <img src={img1} alt="" />
          <div className="productInfo">
            <h2>Pardes Restaurant</h2>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p>Work time 09:30 - 23:00</p>
            <p className="beforeYou">
              Before you
              <span> 4$</span>
            </p>
          </div>
        </div>
        <div className="product">
          <img src={img2} alt="" />
          <div className="productInfo">
            <h2>Glamour Kafe</h2>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p>Work time 09:00 - 21:00</p>
            <p className="beforeYou">
              Before you
              <span> 13$</span>
            </p>
          </div>
        </div>
        <div className="product">
          <img src={img3} alt="" />
          <div className="productInfo">
            <h2>Aromat Bakery</h2>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p>Work time 09:00 - 22:00</p>
            <p className="beforeYou">
              Before you
              <span> 3$</span>
            </p>
          </div>
        </div>
        <div className="product">
          <img src={img4} alt="" />
          <div className="productInfo">
            <h2>Last night Restaurant & kafe</h2>
            <ReactStars
              count={5}
              onChange={ratingChanged}
              size={24}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p>Work time 10:00 - 22:00</p>
            <p className="beforeYou">
              Before you
              <span> 5$</span>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Home;
