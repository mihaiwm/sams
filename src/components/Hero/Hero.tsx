import React from "react";
import "./Hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="hero__imgWrapper">
        <img
          className="hero__img"
          src="https://www.samsonite.co.uk/dw/image/v2/AATF_PRD/on/demandware.static/-/Library-Sites-sams-content-library/default/dw4043fc1c/collection-banner/collection-banner_proxis/collection-banner_proxis.jpg?sw=1920&sh=400"
          alt=""
        />
      </div>
      <div className="hero__content">
        <h2 className="hero__title">
          PROXIS <br /> COLLECTION
        </h2>
        <button className="hero__button">DISCOVER THE COLLECTION</button>
      </div>
    </div>
  );
}

export default Hero;
