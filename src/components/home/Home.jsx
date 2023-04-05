import React from "react";
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
import promoImg2 from "../../images/Promo2.svg";

const ratingChanged = (newRating) => {
  console.log(newRating);
};

const Home = () => {
  return (
    <section className="">
      <Carousel
        emulateTouch={true}
        showArrows={false}
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        width={"80%"}
        infiniteLoop={true}
        className="carouselHome"
      >
        <div className="carouselImgContainHome">
          <img src={promoImg1} className="carouselImg" />
        </div>
        <div className="carouselImgContainHome">
          <img src={promoImg2} className="carouselImg" />
        </div>
        <div className="carouselImgContainHome">
          <img src={promoImg1} className="carouselImg" />
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
