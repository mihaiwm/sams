import React from "react";
import "./Newsletter.scss";

function Newsletter() {
  return (
    <div className="newsletter">
      <h3 className="newsletter__title">JOIN OUR COMMUNITY</h3>
      <input
        className="newsletter__textInput"
        type="text"
        placeholder="Enter your email"
      />
    </div>
  );
}

export default Newsletter;
