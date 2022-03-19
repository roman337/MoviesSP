import React from 'react';
import {findAllByDisplayValue} from "@testing-library/react";

const Profile = () => {
    return (
        <div style={{fontSize: '30px'}}>
            <h1>Ваш профиль</h1>
            <p>Имя: Admin</p>
        </div>
    );
};

export default Profile;