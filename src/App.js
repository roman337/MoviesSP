import React, {useEffect, useState} from "react";
import ReactDOM from "react-dom";
import {Routes, Route, BrowserRouter, Link} from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./UI/Navbar/Navbar";
import './styles/App.css'
import AppRouter from "./components/AppRouter";
import MyButton from "./UI/button/MyButton";
import classes from './UI/button/MyButton.module.css'
import {AuthContext} from "./context";
import axios from "axios";
import async from "async";
import Service from "./API/Service";
import error from "./pages/Error";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {store} from "./store";

const App = () => {
   const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true);
        }
    }, []);


  return (
      <Provider store={store}>
          <AuthContext.Provider value = {{
              isAuth,
              setIsAuth
          }}>
              <BrowserRouter>
                  <Navbar/>
                  <AppRouter/>
              </BrowserRouter>
          </AuthContext.Provider>
      </Provider>

  );
}

export default App;
