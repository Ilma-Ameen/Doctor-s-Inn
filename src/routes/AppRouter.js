import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from "../pages/Home";
import Services from "../pages/Services";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Doctor from "../pages/Doctor/Doctor";
import Doctordetail from "../pages/Doctor/Doctordetail";

const AppRouter = () =>{
    return(
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/service" element={<Services/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/doctors" element={<Doctor/>}/>
            <Route path="/doctors/:id" element={<Doctordetail/>}/>
        </Routes>
        </>
    )
}

export default AppRouter;