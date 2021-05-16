import React, { Component } from "react";
import logo from "../assets/logo-header.png";
import { connect, useDispatch } from "react-redux"
import { logOut, UNAUTHENTICATE } from "../modules/auth/actions";
import { Link, useHistory } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const unauthenticate = (event) => {
    event.preventDefault();
    dispatch({ type: UNAUTHENTICATE });
    queueMicrotask(() => history.push('/login'));
  }

  return (
    <header className="header">
      <div className="header__column">
        <img src={logo} className="menu__logo" alt="logo" />
      </div>
      <div className="header__column">
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item menu__item--active menu__btn"><Link to="/map">Карта</Link></li>
            <li className="menu__item menu__btn" ><Link to="/profile">Профиль</Link></li>
            <li className="menu__item "><button className="menu__btn" onClick={unauthenticate}>Выйти</button></li>
          </ul>
        </nav>
      </div>
    </header>
  )

}

export default Header;

