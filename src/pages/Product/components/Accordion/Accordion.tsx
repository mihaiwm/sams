import React, { useState } from "react";
import "./Accordion.scss";
import {
  MdOutlineKeyboardArrowDown,
  MdOutlineKeyboardArrowUp,
} from "react-icons/md";

interface IAccordion {
  children: React.ReactNode;
  title: string;
}

function Accordion({ children, title }: IAccordion) {
  const [showContent, setShowContent] = useState(false);
  return (
    <div className="accordion">
      <div
        className="accordion__head"
        onClick={() => setShowContent(!showContent)}
      >
        <h3 className="accordion__title">{title}</h3>
        {!showContent && <MdOutlineKeyboardArrowDown size={22} />}
        {showContent && <MdOutlineKeyboardArrowUp size={22} />}
      </div>
      {showContent && children}
    </div>
  );
}

export default Accordion;
