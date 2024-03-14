import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.scss';
import { useMediaQuery } from "react-responsive";

interface ICarousel {
  slidesToShowDesktop: number;
  slidesToShowMobile: number;
  title: string;
  className?: string;
  children: React.ReactNode;
}

function Carousel({slidesToShowDesktop, slidesToShowMobile, title, children, className}:ICarousel) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? slidesToShowMobile : slidesToShowDesktop,
    slidesToScroll: isMobile ? slidesToShowMobile : slidesToShowDesktop
  };
  return (
    
    <div className={`carousel ${className ? className : ''}`}>
      <h2 className="carousel__title">{title}</h2>
      <Slider {...settings}>
        {children}
      </Slider>
  </div>
  );
}

export default Carousel