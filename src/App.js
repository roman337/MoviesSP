import React, {useState} from "react";
import ReactDOM from "react-dom";
import {Routes, Route, BrowserRouter, Link} from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./UI/Navbar/Navbar";
import './styles/App.css'
import AppRouter from "./components/AppRouter";
import MyButton from "./UI/button/MyButton";
import classes from './UI/button/MyButton.module.css'

const App = () => {
   const [isLogin, setLogin] = useState(false);

    const log = () => {
        setLogin(true);
    }

  return (
        <BrowserRouter>
            <Navbar/>

            <form className='main__title'>
                <p>
                    Добро пожаловать на наш сайт. <br/>
                    Войдите, чтобы увидеть больше!
                </p>
                {/*<MyButton>*/}
                {/*    Войти*/}
                {/*</MyButton>*/}
                <Link className={classes.myBtn} to='/login' onClick={log}>Войти</Link>
            </form>


            <AppRouter/>
        </BrowserRouter>
  );
}

export default App;
