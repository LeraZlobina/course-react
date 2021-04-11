import React, {Component} from "react";
import { Input } from "./Input";
import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {authenticate} from "../modules/auth/actions";
import { Link, Redirect } from "react-router-dom";


export class Register extends Component {

    authenticate = (event) => {
        event.preventDefault();
        const { email, password } = event.target;
        this.props.authenticate(email.value, password.value);
    }

    render () {

        return (
            <>
                {this.props.isLoggedIn ? (<Redirect to="/map" />) :
                    (
                        <div className="wrapper">
                            <div className="page-wrapper">
                                <div className="page-wrapper__left"> 
                                    <img src={ logo } alt="logo" className="logo"/>
                                </div>
                                <div className="page-wrapper__right">
                                    <div className="page-form__wrapper">
                                        <div className="form-wrapper">
                                            <h1 className="page__title">Регистрация</h1>
                                            <form className="form" onSubmit={this.authenticate}>
                                                <Input name="email" type="email" placeholder="Введите email" label="Email" />
                                                <Input name="name" type="text" placeholder="Введите имя" label="Как вас зовут?" />
                                                <Input name="password" type="password" placeholder="Введите пароль" label="Придумайте пароль" />
                                                <button className="btn btn--signup" type="submit">Зарегистрироваться</button>
                                            </form>
                                            <div>Уже зарегистрированы? 
                                                <span className="page__subtitle"><Link to="/login"> Войти</Link></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
            </>
            
        )
    }
};

Register.propTypes = {
    isLoggedIn: PropTypes.bool,
}

export const RegisterWithAuth = connect(
    state => ({isLoggedIn: state.auth.isLoggedIn}),
    {authenticate}
)(Register)
