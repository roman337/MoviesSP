import React from "react";
import ReactDOM from "react-dom";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./UI/Navbar/Navbar";
import './styles/App.css'
import AppRouter from "./components/AppRouter";

function App() {
  return (
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}></Route>
            </Routes>
            <Navbar/>
            main
        </BrowserRouter>
  );
}

export default App;
