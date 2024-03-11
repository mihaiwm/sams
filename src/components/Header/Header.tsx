import React from 'react'
import './Header.scss';
import CountryAccordion from './components/CountryAccordion/CountryAccordion';
import Navigation from '../Navigation/Navigation';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { SlBag } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <div className="header">
      <div className="header__topBar">
        <CountryAccordion/>
          <div className="header__logo-wrapper">
              <img className="header__logo" src="https://www.samsonite.ro/ro/samsonite-bw.png" alt="samsonite-logo" />
          </div>
          <ul className="header__utilityIcons">
            <li className="header__icon header__locationIcon">
              <IoLocationOutline size={20}/>
            </li>
            <li className="header__icon header__userIcon">
              <AiOutlineUser size={20}/>
            </li>
            <li className="header__icon header__bagIcon">
              <SlBag size={20} />
            </li>
            <li className="header__icon header__menuIcon">
              <RxHamburgerMenu size={20}/>
            </li>
          </ul>
      </div>
      <Navigation/>
    </div>
  )
}

export default Header