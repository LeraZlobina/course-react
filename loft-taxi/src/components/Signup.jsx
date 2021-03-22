import React from "react";
import { Input } from "./Input";

export const Signup = ({ navigate }) => {
    
    return (
        <form>
            <h1>Регистрация</h1>
            <div>Уже зарегистрированы? <span onClick={() => {navigate("login")}}>Войти</span></div>
            <Input name="email" type="email" placeholder="Адрес электронной почты *" label="Адрес электронной почты *" />
            <Input name="name" type="text" placeholder="Имя *" label="Имя *" />
            <Input name="surname" type="text" placeholder="Фамилия *" label="Фамилия *" />
            <Input name="password" type="password" placeholder="Пароль *" label="Пароль *" />
            <button type="submit" onClick={() => {navigate("map")}}>Войти</button>
        </form>
    );
};