import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import Header from "./Header";
import SideBar from "./SideBar";

const useAuth = ()=>{
    const user = {loggedIn: true};
    return user && user.loggedIn;
}

function AdminLayout() {
    const isAuth = useAuth();
    return isAuth ? <>
    <Header/>
    <SideBar>
    <Outlet/>
    </SideBar>
 </>: <Navigate to="/loginpage"/>;
    
}

export default AdminLayout;