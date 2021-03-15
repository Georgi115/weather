import React from "react";
import "./header.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = ({ changeInput, searchCity }) => {
  const [viewBurger, setViewBurger] = useState(false);
  const clickBurger = () => {
    setViewBurger(!viewBurger);
  };
  return (
    <header className="header">
      <div className="header__burger">
        <i className="fa fa-navicon" onClick={clickBurger}></i>
        {viewBurger ? (
          <nav className="header__burger-menu animate__animated animate__fadeIn">
            {" "}
            <NavLink
              className="header__link"
              activeClassName={"header__link-active"}
              exact
              to="/"
              onClick={clickBurger}
            >
              Главная
            </NavLink>
            <NavLink
              className="header__link"
              activeClassName={"header__link-active"}
              to="/today"
              onClick={clickBurger}
            >
              Сегодня
            </NavLink>
            <NavLink
              className="header__link"
              activeClassName={"header__link-active"}
              to="/tommorow"
              onClick={clickBurger}
            >
              Завтра
            </NavLink>
            <NavLink
              className="header__link"
              activeClassName={"header__link-active"}
              to="/week"
              onClick={clickBurger}
            >
              На 5 дней
            </NavLink>
          </nav>
        ) : null}
      </div>
      <nav className="header__menu">
        <NavLink
          className="header__link"
          activeClassName={"header__link-active"}
          exact
          to="/"
        >
          Главная
        </NavLink>
        <NavLink
          className="header__link"
          activeClassName={"header__link-active"}
          to="/today"
        >
          Сегодня
        </NavLink>
        <NavLink
          className="header__link"
          activeClassName={"header__link-active"}
          to="/tommorow"
        >
          Завтра
        </NavLink>
        <NavLink
          className="header__link"
          activeClassName={"header__link-active"}
          to="/week"
        >
          На 5 дней
        </NavLink>
      </nav>
      <div className="header__right">
        <input
          className="header__search"
          placeholder="Поиск города"
          onChange={(e) => changeInput(e.target.value)}
        ></input>
        <div className="header__button" onClick={searchCity}>
          Найти
        </div>
      </div>
    </header>
  );
};

export default Header;
