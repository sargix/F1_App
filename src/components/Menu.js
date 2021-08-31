import React from "react";
import { NavLink } from "react-router-dom";

const Menu = ({ isActive, click }) => {
  const activeClassMenu = isActive
    ? "header__menu header__menu--active"
    : "header__menu";
  const menuList = [
    { name: "Start", path: "/", exact: true },
    { name: "Klasyfikacja Kierowców", path: "/std-drv", exact: false },
    { name: "Klasyfikacja Konstruktorów", path: "/std-con", exact: false },
    { name: "Kalendarz", path: "/calendar", exact: false },
    { name: "Tory", path: "/tracks", exact: false },
    { name: "Kierowcy", path: "/drivers", exact: false },
  ];
  const menu = menuList.map((item) => (
    <li className="header__menu-item" key={item.name}>
      <NavLink
        exact={item.exact ? item.exact : null}
        className="header__menu-link"
        activeClassName="header__menu-link--selected"
        onClick={click}
        to={item.path}
      >
        {item.name}
      </NavLink>
    </li>
  ));
  return (
    <nav className={activeClassMenu}>
      <ul className="header__menu-list">{menu}</ul>
    </nav>
  );
};

export default Menu;
