import React, {Component} from "react";
import { Input } from "./Input";
import logo from "../assets/logo.png";
import PropTypes from "prop-types";
import { withAuth } from "./AuthContext";


export class Login extends Component {
    
    authenticate = (event) => {
        event.preventDefault();
        const { email, password } = event.target;
        this.props.logIn(email.value, password.value);
    }
    
    render() {
        return (
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
                            <button className="btn btn--login" type="submit" onClick={() => {this.props.navigate("map")}}>Войти</button>
                        </form>
                        <div className="form-text">Новый пользователь?  
                            <span className="page__subtitle" onClick={() => {this.props.navigate("signUp")}}> Зарегистрируйтесь</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    );
    }
    
};

Login.propTypes = {
    navigate: PropTypes.func,
    isLoggedIn: PropTypes.bool,
    logIn: PropTypes.func
}

export const LoginWithAuth = withAuth(Login)