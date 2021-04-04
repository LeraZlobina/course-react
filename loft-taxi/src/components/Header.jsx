import React, { Component } from "react";
import logo from "../assets/logo-header.png";
import {connect} from "react-redux"
import { logOut } from "../modules/auth/actions";
import { Link } from "react-router-dom";
    


export class Header extends Component {

    unauthenticate = (event) => {
        event.preventDefault();
        this.props.logOut();
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
                            <li className="menu__item menu__item--active menu__btn"><Link to="/map">Карта</Link></li>
                            <li className="menu__item menu__btn" ><Link to="/profile">Профиль</Link></li>
                            <li className="menu__item menu__btn"><Link to="/login">Выйти</Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
    
}

export const HeaderWithAuth = connect(
    null,
    { logOut }
)
(Header)
