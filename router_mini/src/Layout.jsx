import React from "react";
import Header from "./components/Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";

function Layout(){
    return(
        <>
            <Header/> 
            <Outlet/> 
            <Footer/> 
        </>
    )
}
export default Layout;

// // in main.jsx the header and footer remains same
// Outlet means changes will be here only 