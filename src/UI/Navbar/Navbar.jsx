import React from 'react';
import {Link} from "react-router-dom";
import cl from "./Navbar.module.css";

const Navbar = () => {
    return (
        <div>
            <div>
                <Link to='/'>На главную</Link>
                <Link to="/movies">Фильмы</Link>
                <Link to='/profile'>Профиль</Link>
            </div>
        </div>
    );
};

export default Navbar;