import React from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Error from "../pages/Error";

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/'/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile'/>
            <Route path='/error' element={<Error/>}/>
            <Route path='/*' element={<Error/>}/>
        </Routes>
    );
};

export default AppRouter;