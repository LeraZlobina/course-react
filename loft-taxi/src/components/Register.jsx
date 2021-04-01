import React, {Component} from "react";
import { Input } from "./Input";
import logo from "../assets/logo.png"
import PropTypes from "prop-types";

export class Register extends Component {

    goToMap = (event) => {
        event.preventDefault();
        this.props.navigate("map");
    };

    goToLogin = (event) => {
        event.preventDefault();
        this.props.navigate("login");
    };

    render () {

        return (
            <div className="page-wrapper">
                <div className="page-wrapper__left"> 
                    <img src={ logo } alt="logo" className="logo"/>
                </div>
                <div className="page-wrapper__right">
                    <div className="page-form__wrapper">
                        <div className="form-wrapper">
                            <h1 className="page__title">Регистрация</h1>
                            <form className="form" >
                                <Input name="email" type="email" placeholder="Введите email" label="Email" />
                                <Input name="name" type="text" placeholder="Введите имя" label="Как вас зовут?" />
                                <Input name="password" type="password" placeholder="Введите пароль" label="Придумайте пароль" />
                                <button className="btn btn--signup" type="submit" onClick={this.goToMap}>Зарегистрироваться</button>
                            </form>
                            <div>Уже зарегистрированы? 
                                <span className="page__subtitle" onClick={this.goToLogin}> Войти</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

Register.propTypes = {
    navigate: PropTypes.func
}

