import React, { useState } from "react";
import "./Navigation.scss";
import { CiSearch } from "react-icons/ci";


interface INavigation {
  isOpened: boolean;
  isMobile: boolean;
}

function Navigation({ isOpened, isMobile }: INavigation) {
  const [isExpand, setExpand] = useState(false);

  return (
    <>
      <nav
        className={`navigation ${
          isOpened && isMobile
            ? "navigation--opened"
            : !isOpened && isMobile
            ? "navigation--closed"
            : ""
        }`}
      >
        {!isMobile && (
          <div className="navigation__inputWrapper">
            <input
              type="text"
              className="navigation__searchInput"
              placeholder="Search"
            />
            <CiSearch size={20} className="navigation__inputIcon"/>
          </div>
        )}
        <ul className="navigation__links">
          <li className="navigation__link" onMouseEnter={() => setExpand(true)}>
            Luggage
          </li>
          <li className="navigation__link" onMouseEnter={() => setExpand(true)}>
            Backpacks
          </li>
          <li className="navigation__link" onMouseEnter={() => setExpand(true)}>
            Bags
          </li>
          <li className="navigation__link" onMouseEnter={() => setExpand(true)}>
            Disney & Kids
          </li>
          <li className="navigation__link" onMouseEnter={() => setExpand(true)}>
            Personalisation
          </li>
        </ul>
        <ul className="navigation__staticLinks">
          <li
            className="navigation__link"
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}
          >
            Services
          </li>
          <li
            className="navigation__link"
            onMouseEnter={() => setExpand(true)}
            onMouseLeave={() => setExpand(false)}
          >
            The Brand
          </li>
        </ul>
      </nav>

      {isExpand && !isMobile && (
        <div
          className="navigation__expanded"
          onMouseLeave={() => setExpand(false)}
        ></div>
      )}

      {(isOpened && isMobile) || (isExpand && !isMobile) ? (
        <div className="overlay"></div>
      ) : null}
    </>
  );
}

export default Navigation;
