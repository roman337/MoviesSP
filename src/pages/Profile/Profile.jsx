import React from 'react';
import classes from './Profile.module.css'

const Profile = () => {
    return (
        <div className={classes.profile}>
            <h1>Ваш профиль</h1>
            <p>Имя: Admin</p>
        </div>
    );
};

export default Profile;