import React from 'react'
import './Navigation.scss';

interface INavigation {
  isOpened: boolean;
  isMobile: boolean;
}

function Navigation({isOpened, isMobile}:INavigation) {

    return (
      <nav className={`navigation ${
        isOpened && isMobile
          ? "navigation--opened"
          : !isOpened && isMobile
          ? "navigation--closed"
          : ""
      }`}>
        {!isMobile &&
        <div className="navigation__inputWrapper">
          <input type="text" className="navigation__searchInput" placeholder='Search'/>
        </div>
        }
        <ul className="navigation__links">
            <li className="navigation__link">Luggage</li>
            <li className="navigation__link">Backpacks</li>
            <li className="navigation__link">Bags</li>
            <li className="navigation__link">Disney & Kids</li>
            <li className="navigation__link">Personalisation</li>
        </ul>
        <ul className="navigation__staticLinks">
          <li className="navigation__link">Services</li>
          <li className="navigation__link">The Brand</li>
        </ul>
    </nav>
    )

}
  

export default Navigation