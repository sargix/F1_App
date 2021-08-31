import React, { useState, useEffect } from "react";

import Menu from "./Menu";
import f1 from "../images/f1.png";

const Header = () => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  useEffect(() => {
    return () => {
      setIsActiveMenu(false);
    };
  }, []);

  const handleClickMenuIcon = () => {
    setIsActiveMenu((prevValue) => !prevValue);
  };
  const handleMenuClick = () => {
    setIsActiveMenu((prevValue) => !prevValue);
  };
  const activeClassIcon = isActiveMenu
    ? "header__menu-icon header__menu-icon--active"
    : "header__menu-icon";
  const activeClassHeader = isActiveMenu ? "header header--active" : "header";
  return (
    <>
      <header className={activeClassHeader}>
        <div className="header__wrap">
          <div
            className="header__logo"
            style={{ backgroundImage: `url(${f1})` }}
          ></div>
          <div onClick={handleClickMenuIcon} className={activeClassIcon}>
            <i className="fas fa-chevron-down"></i>
          </div>
        </div>

        <Menu isActive={isActiveMenu} click={handleMenuClick} />
      </header>
    </>
  );
};

export default Header;
