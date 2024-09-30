import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const Carousel = () => {
  const sliderRef = useRef(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const totalSlides = 4;

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    verticalSwiping: true,
    swipe: true,
    draggable: true,
    swipeToSlide: true,
    onSwipe: (direction) => {
      if (direction === "up") {
        sliderRef.current.slickNext();
      } else if (direction === "down") {
        sliderRef.current.slickPrev();
      }
    },
    beforeChange: (current, next) => setActiveSlide(next),
  };

  return (
    <div className="slider_container">
      <span
        className="carousel-button top-button"
        onClick={() => sliderRef.current.slickPrev()}
        disabled={activeSlide === 0}
      >
        <FontAwesomeIcon
          className={`icon ${activeSlide === 0 && "disabled"}`}
          icon={faArrowUp}
        />
      </span>

      <div className="slider_carousel">
        <Slider ref={sliderRef} {...settings}>
          <div className="card">
            <h3>1</h3>
          </div>
          <div className="card">
            <h3>2</h3>
          </div>
          <div className="card">
            <h3>3</h3>
          </div>
          <div className="card">
            <h3>4</h3>
          </div>
        </Slider>
      </div>

      <span
        className="carousel-button bottom-button"
        onClick={() => sliderRef.current.slickNext()}
        disabled={activeSlide === totalSlides - 1}
      >
        <FontAwesomeIcon
          className={`icon ${activeSlide === 3 && "disabled"}`}
          icon={faArrowDown}
        />
      </span>
    </div>
  );
};

export default Carousel;
