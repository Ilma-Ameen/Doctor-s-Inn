import React from "react";
import Footer from "../Footer/Footer";
import AppRouter from "../../routes/AppRouter";
import Header from "../Header/Header";

export default function Layout(){
    return(
        <>
        <Header/>
        <AppRouter/>
        <Footer/>
        </>
    )
}
