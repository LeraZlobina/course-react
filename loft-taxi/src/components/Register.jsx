import React, { Component, useCallback, useState } from "react";
import { Input } from "./Input";
import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import { connect, useDispatch, useSelector } from "react-redux";
import { registration } from "../modules/register/actions";
import { Link, Redirect, useHistory } from "react-router-dom";
import { isLoggedInSelector } from "../modules/auth/reducer";
import { CircularProgress } from "@material-ui/core";


const Register = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoggedIn = useSelector(isLoggedInSelector);
  const [isLoading, setIsLoading] = useState(false);

  const signUp = useCallback((event) => {
    setIsLoading(true);
    event.preventDefault();
    const { email, password, name, surname } = event.target;
    dispatch(registration(email.value, password.value, name.value, surname.value));
    setTimeout(() => {
      setIsLoading(false);
      isLoggedIn && history.push('/map');
    }, 2000);
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (<Redirect to="/map" />) :
        (
          <div className="wrapper">
            <div className="page-wrapper">
              <div className="page-wrapper__left">
                <img src={logo} alt="logo" className="logo" />
              </div>
              <div className="page-wrapper__right">
                <div className="page-form__wrapper">
                  <div className="form-wrapper">
                    <h1 className="page__title">Регистрация</h1>
                    <form className="form" onSubmit={signUp}>
                      <Input name="email" type="email" placeholder="Введите email" label="Email" />
                      <Input name="name" type="text" placeholder="Имя" label="Ваше имя" />
                      <Input name="surname" type="text" placeholder="Фамилия" label="Ваша фамилия" />
                      <Input name="password" type="password" placeholder="Введите пароль" label="Придумайте пароль" />
                      <button className="btn btn--signup" type="submit">
                        {isLoading ? <CircularProgress size={24} /> : 'Зарегистрироваться'}
                        </button>
                    </form>
                    <div>Уже зарегистрированы?
                        <span className="page__subtitle"><Link to="/login">Войти</Link></span>
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

export default Register;

export const RegisterWithConnect = connect(
  state => ({ isRegisterIn: state.register.isRegisterIn }),
  { registration }
)(Register)
