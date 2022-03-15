import React from 'react';
import {Link} from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.navbar__links}>
                <Link className={classes.navbar__item} to='/'>На главную</Link>
                <Link className={classes.navbar__item} to="/movies">Фильмы</Link>
                <Link className={classes.navbar__item} to='/profile'>Профиль</Link>

            </div>
        </div>
    );
};

export default Navbar;