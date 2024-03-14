import React from "react";
import './Benefit.scss';

interface IBenefit {
  imageSrc: string;
  title: string;
  description: string;
}

function Benefit({ imageSrc, title, description }: IBenefit) {
  return (
    <div className="benefit">
      <div className="benefit__imageWrapper">
        <img className="benefit__image" src={imageSrc} alt="" />
      </div>
      <h2 className="benefit__title">{title}</h2>
      <p className="benefit__description">{description}</p>
    </div>
  );
}

export default Benefit;
