import React, { Component } from "react";
import logo from "../assets/logo-header.png";
import PropTypes from "prop-types";
import { withAuth } from "./AuthContext";

export class Header extends Component {

    unauthenticate = (event) => {
        event.preventDefault();
        this.props.logOut();
        this.props.navigate("login");
    }

    render() {
        return (
            <header className="header">
                <div className="header__column">
                    <img src={ logo } className="menu__logo" alt="logo"/>
                </div>
                <div className="header__column">
                    <nav className="menu">
                        <ul className="menu__list">
                            <li className="menu__item menu__item--active"><button className="menu__btn" onClick={() => {this.props.navigate("map")}}>Карта</button></li>
                            <li className="menu__item"><button className="menu__btn" onClick={() => {this.props.navigate("profile")}}>Профиль</button></li>
                            <li className="menu__item"><button className="menu__btn" onClick={this.unauthenticate}>Выйти</button></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
    
}

Header.propTypes = {
    navigate: PropTypes.func
}

export const HeaderWithAuth = withAuth(Header)
