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

const App = () => {
   const [isAuth, setIsAuth] = useState(false);

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setIsAuth(true);
        }
    }, []);

  return (
      <AuthContext.Provider value = {{
          isAuth,
          setIsAuth
      }}>
          <BrowserRouter>
              <Navbar/>
              <AppRouter/>
          </BrowserRouter>
      </AuthContext.Provider>

  );
}

export default App;
