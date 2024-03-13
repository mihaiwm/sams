import React, { useState } from 'react'
import './Header.scss';
import CountryAccordion from './components/CountryAccordion/CountryAccordion';
import Navigation from '../Navigation/Navigation';
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { SlBag } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { useMediaQuery } from "react-responsive";
import { CiSearch } from "react-icons/ci";

function Header() {
  const isMobile = useMediaQuery({ maxWidth: 1260 });
  const [isOpened, setIsOpened] = useState(false);
  isMobile && isOpened
    ? document.body.classList.add("body--locked")
    : document.body.classList.remove("body--locked");
  return (
    <div className="header">
      <div className="header__topBar">
        {!isMobile ? <CountryAccordion/> : <CiSearch className="header__icon" size={22}/>}
          <div className="header__logo-wrapper">
              <img className="header__logo" src="https://www.samsonite.ro/ro/samsonite-bw.png" alt="samsonite-logo" />
          </div>
          <ul className="header__utilityIcons">
          {!isMobile && (
            <>
              <li className="header__icon header__locationIcon">
                <IoLocationOutline size={20}/>
              </li>
              <li className="header__icon header__userIcon">
                <AiOutlineUser size={20}/>
              </li>
            </>
          )
          }
            <li className="header__icon header__bagIcon">
              <SlBag size={20} />
            </li>
            {isMobile && !isOpened &&
            <li className="header__icon header__menuIcon">
              <RxHamburgerMenu size={24} onClick={() => setIsOpened(true)}/>
            </li>
            }
            {isMobile && isOpened &&
            <li className="header__icon header__menuIcon">
              <AiOutlineClose size={24} onClick={() => setIsOpened(false)}/>
            </li>
            }
          </ul>
      </div>
      <Navigation isOpened={isOpened} isMobile={isMobile}/>
    </div>
  )
}

export default Header