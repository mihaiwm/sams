import React from "react";
import "./Newsletter.scss";
import { GoArrowRight } from "react-icons/go";

function Newsletter() {
  return (
    <div className="newsletter">
      <h3 className="newsletter__title">JOIN OUR COMMUNITY</h3>
      <div className="newsletter__inputWrapper">
        <input
          className="newsletter__textInput"
          type="text"
          placeholder="Enter your email"
        />
        <GoArrowRight size={24} className="newsletter__icon"/>
      </div>
    </div>
  );
}

export default Newsletter;
