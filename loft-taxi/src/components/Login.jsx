import React, {useState} from "react";
import { Input } from "./Input";


export const Login = ({ navigate }) => {
    let[email, setEmail] = useState('');
    let[password, setPassword] = useState('');
    return (
        <form>
            <h1>Войти</h1>
            <div>Новый пользователь? <span onClick={() => {navigate("signup")}}>Зарегистрируйтесь</span></div>
            <Input name="email" type="email" placeholder="Имя пользователя *" label="Имя пользователя *" value={email} change={setEmail} />
            <Input name="password" type="password" placeholder="Пароль *" label="Пароль *" value={password} change={setPassword} />
            <button type="submit" onClick={() => {navigate("map")}}>Войти</button>
        </form>
    );
};