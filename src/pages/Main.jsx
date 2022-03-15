import React from 'react';
import {Link} from "react-router-dom";
import classes from "../UI/button/MyButton.module.css";

const Main = () => {
    return (
        <form className='main__title'>
            <p>
                Добро пожаловать на наш сайт. <br/>
                Войдите, чтобы увидеть больше!
            </p>
            {/*<MyButton>*/}
            {/*    Войти*/}
            {/*</MyButton>*/}
            <Link className={classes.myBtn} to='/login'>Войти</Link>
        </form>
    );
};

export default Main;