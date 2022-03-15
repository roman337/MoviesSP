import React, {useContext} from 'react';
import {Route, Routes} from "react-router-dom";
import Login from "../pages/Login";
import Error from "../pages/Error";
import Main from "../pages/Main";
import {privateRoutes, publicRoutes} from "../router";
import {AuthContext} from "../context";

const AppRouter = () => {
    const {isAuth} = useContext(AuthContext);

    return (
        <Routes>
            {isAuth ?
                privateRoutes.map(route =>
                <Route
                    path={route.path}
                    element={<route.element/>}
                    exact={route.exact}
                    key={route.path}
                />)
                :
                publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.element/>}
                        exact={route.exact}
                        key={route.path}
                    />)
            }
        </Routes>

        // <Routes>
        //     <Route path='/' element={<Main/>}/>
        //     <Route path='/login' element={<Login/>}/>
        //     <Route path='/profile'/>
        //     <Route path='/error' element={<Error/>}/>
        //     <Route path='/*' element={<Error/>}/>
        // </Routes>
    );
};

export default AppRouter;