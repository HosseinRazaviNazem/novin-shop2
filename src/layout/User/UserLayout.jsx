import React from "react";
import {Outlet} from "react-router-dom";
import Footer from "../../components/ORGANISMS/Footer.component";
import Header from "../../components/ORGANISMS/HeaderUser.component";

function UserLayout(props) {
    return (
        <>
            <Header/>
               <Outlet/>
            <Footer/>
        </>
    );
}

export default UserLayout;

