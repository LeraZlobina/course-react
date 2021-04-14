import React, {Component} from "react";
import { Input } from "./Input";
import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {registration} from "../modules/register/actions";
import { Link, Redirect } from "react-router-dom";


export class Register extends Component {

    registration = (event) => {
        event.preventDefault();
        const { email, password, name, surname } = event.target;
        this.props.registration(email.value, password.value, name.value, surname.value);
    }

    render () {

        return (
            <>
                {this.props.isRegisterIn ? (<Redirect to="/map" />) :
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
                                            <form className="form" onSubmit={this.registration}>
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
    isRegisterIn: PropTypes.bool,
}

export const RegisterWithConnect = connect(
    state => ({isRegisterIn: state.register.isRegisterIn}),
    {registration}
)(Register)
