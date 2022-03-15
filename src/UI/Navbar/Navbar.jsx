import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";
import MyButton from "../button/MyButton";
import {AuthContext} from "../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext);

    const logout = (event) => {
         setIsAuth(false);
         localStorage.removeItem('auth');
     }

    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                <Link className={classes.navbar__item} to='/'>На главную</Link>
                <Link className={classes.navbar__item} to="/movies">Фильмы</Link>
                <Link className={classes.navbar__item} to='/profile'>Профиль</Link>
            </div>
            <MyButton onClick={logout}>Выйти</MyButton>
        </div>
    );
};

export default Navbar;