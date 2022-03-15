import React, {useContext, useState} from 'react';
import {BrowserRouter} from "react-router-dom";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../context";
import {findAllByDisplayValue} from "@testing-library/react";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const requiredUsername = 'Admin';
    const requiredPassword = 12345;

    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    function login(event) {
        event.preventDefault();
        if (enteredUsername == requiredUsername && enteredPassword == requiredPassword) {
            setIsAuth(true);
            localStorage.setItem('auth', 'true');
        } else {
            alert('Имя пользователя или пароль введены не верно');
        }
    }

    return (
        <div style={{margin: '0 auto', width: '300px', alignItems: 'center', marginTop: '100px'}}>
            <h1 style={{color: 'ghostwhite'}}>Войдите на сайт!</h1>
           <form onSubmit={login}>
               <MyInput type="text" onChange={event => setEnteredUsername(event.target.value)} placeholder="Введите логин"/>
               <MyInput type="password" onChange={event => setEnteredPassword(event.target.value)} placeholder="Введите пароль"/>
               <MyButton>Войти</MyButton>
           </form>
        </div>
    );
};

export default Login;