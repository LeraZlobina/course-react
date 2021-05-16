import React, {Component} from "react";
import { Input } from "./Input";
import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {logIn} from "../modules/auth/actions";
import { Link, Redirect } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isLoggedInSelector } from "../modules/auth/reducer";

export const Login = () => {

    const isLoggedIn  = useSelector(isLoggedInSelector);

    const dispatch = useDispatch();
    
    const authenticate = (event) => {
        event.preventDefault();
        const { email, password } = event.target;
        dispatch(logIn(email.value, password.value));
    }

    
    return (
        <>
            {isLoggedIn ? (<Redirect to="/map" />) : 
                (   <div className="wrapper">
                        <div className="page-wrapper">
                            <div className="page-wrapper__left"> 
                                <img src={ logo } alt="logo" className="logo"/>  
                            </div>
                            <div className="page-wrapper__right">
                                <div className="page-form__wrapper">
                                    <div className="form-wrapper">
                                        <h1 className="page__title">Войти</h1>
                                        <form className="form" onSubmit={authenticate}>
                                            <Input name="email" type="email" placeholder="Введите email" label="Email" />
                                            <Input name="password" type="password" placeholder="Введите пароль" label="Пароль" />
                                            <button className="btn btn--login" type="submit" >Войти</button>
                                        </form>
                                        <div className="form-text">Новый пользователь?  
                                            <span className="page__subtitle"><Link to="/register"> Зарегистрируйтесь</Link></span>
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


/*export class Login extends Component {
    
    authenticate = (event) => {
        event.preventDefault();
        const { email, password } = event.target;
        this.props.authenticate(email.value, password.value);
    }

    render() {
        return (
            <>
                {this.props.isLoggedIn ? (<Redirect to="/map" />) : 
                    (   <div className="wrapper">
                            <div className="page-wrapper">
                                <div className="page-wrapper__left"> 
                                    <img src={ logo } alt="logo" className="logo"/>  
                                </div>
                                <div className="page-wrapper__right">
                                    <div className="page-form__wrapper">
                                        <div className="form-wrapper">
                                            <h1 className="page__title">Войти</h1>
                                            <form className="form" onSubmit={this.authenticate}>
                                                <Input name="email" type="email" placeholder="Введите email" label="Email" />
                                                <Input name="password" type="password" placeholder="Введите пароль" label="Пароль" />
                                                <button className="btn btn--login" type="submit" >Войти</button>
                                            </form>
                                            <div className="form-text">Новый пользователь?  
                                                <span className="page__subtitle"><Link to="/register"> Зарегистрируйтесь</Link></span>
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

Login.propTypes = {
    isLoggedIn: PropTypes.bool,
}

export const LoginWithConnect = connect(
    state => ({isLoggedIn: state.auth.isLoggedIn}),
    {authenticate}
)(Login)*/
