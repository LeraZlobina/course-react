import React from "react";
import { Input } from "./Input";
import logo from "../assets/logo.png"
import PropTypes from "prop-types";

export const SignUp = ({ navigate }) => {
    
    return (
        <div className="page-wrapper">
            <div className="page-wrapper__left"> 
                <img src={ logo } alt="logo" className="logo"/>
            </div>
            <div className="page-wrapper__right">
                <div className="page-form__wrapper">
                    <div className="form-wrapper">
                        <h1 className="page__title">Регистрация</h1>
                        <form className="form">
                            <Input name="email" type="email" placeholder="Введите email" label="Email" />
                            <Input name="name" type="text" placeholder="Введите имя" label="Как вас зовут?" />
                            <Input name="password" type="password" placeholder="Введите пароль" label="Придумайте пароль" />
                            <button className="btn btn--signup" type="submit" onClick={() => {navigate("map")}}>Зарегистрироваться</button>
                        </form>
                        <div>Уже зарегистрированы? 
                            <span className="page__subtitle" onClick={() => {navigate("login")}}> Войти</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

SignUp.propTypes = {
    navigate: PropTypes.func
}