import React from "react";

export const Header = ({ navigate }) => {
    return (
        <header>
            <img alt="logo"/>
            <ul>
                <li><button onClick={() => {navigate("map")}}>Карта</button></li>
                <li><button onClick={() => {navigate("profile")}}>Профиль</button></li>
                <li><button onClick={() => {navigate("login")}}>Выйти</button></li>
            </ul>
        </header>
    )
}