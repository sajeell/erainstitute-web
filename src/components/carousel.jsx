import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-bootstrap";
import fSlide from "./1slide.png";
import sSlide from "./2slide.png";
import tSlide from "./3rd slide.png";
import "./compStyle.css";
const CarouselPage = () => {
  return (
    <div className="carousel-wrapper">
      <Carousel
        autoPlay={true}
        emulateTouch={true}
        useKeyboardArrows={true}
        centerMode={true}
        dynamicHeight={true}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={fSlide}
            alt="First slide"
            height="560rem"
          />
          <Carousel.Caption>
            <h3 className="carousel-text">Era Institute</h3>
            <p className="carousel-text">We Provide Online Tution</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={sSlide}
            alt="Second slide"
            height="560rem"
          />

          <Carousel.Caption>
            <h3 className="carousel-text">Era Institute</h3>
            <p className="carousel-text">We provide home tutors</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={tSlide}
            alt="Third slide"
            height="560rem"
          />
          <Carousel.Caption>
            <h3 className="carousel-text">Era Institute</h3>
            <p className="carousel-text">
              Pioneer in 0/A Levels, Matric, FSC tution
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
export default CarouselPage;
