import React, {useContext} from 'react';
import {BrowserRouter} from "react-router-dom";
import MyInput from "../UI/input/MyInput";
import MyButton from "../UI/button/MyButton";
import {AuthContext} from "../context";

const Login = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);
    function login(event) {
        event.preventDefault();
        setIsAuth(true);
        localStorage.setItem('auth', 'true');
    }

    return (
        <div style={{margin: '0 auto', width: '300px', alignItems: 'center', marginTop: '100px'}}>
            <h1 style={{color: 'ghostwhite'}}>Войдите на сайт!</h1>
           <form onSubmit={login}>
               <MyInput type="text" placeholder="Введите логин"/>
               <MyInput type="password" placeholder="Введите пароль"/>
               <MyButton>Войти</MyButton>
           </form>
        </div>
    );
};

export default Login;