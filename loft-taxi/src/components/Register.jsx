import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "./Input";
import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {registration} from "../modules/register/actions";
import { Link, Redirect } from "react-router-dom";
import { isLoggedInSelector } from "../modules/auth/reducer";


export const Register = () => {

    const isLoggedIn  = useSelector(isLoggedInSelector);

    const dispatch = useDispatch();

    const registration = (event) => {
        event.preventDefault();
        const { email, password, name, surname } = event.target;
        dispatch(registration(email.value, password.value, name.value, surname.value));
    }

    

    return (
        <>
            {isLoggedIn ? (<Redirect to="/map" />) :
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
                                            <Input name="name" type="text" placeholder="Введите имя" label="Имя" />
                                            <Input name="surname" type="text" placeholder="Введите фамилию" label="Фамилия" />
                                            <Input name="password" type="password" placeholder="Введите пароль" label="Пароль" />
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
    
};

