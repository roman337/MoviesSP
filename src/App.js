import React from "react";
import ReactDOM from "react-dom";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./UI/Navbar/Navbar";
import './styles/App.css'
import AppRouter from "./components/AppRouter";
import MyButton from "./UI/button/MyButton";

const App = () => {
  return (
        <BrowserRouter>
            <Navbar/>

            <from className='main__title'>
                <p>
                    Добро пожаловать на наш сайт.
                    Войдите, чтобы увидеть больше!
                </p>
                <MyButton>
                    Войти
                </MyButton>
            </from>


            <AppRouter/>
        </BrowserRouter>
  );
}

export default App;
