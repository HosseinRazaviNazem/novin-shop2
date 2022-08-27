import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Box from '@mui/material/Box';
import ManegerHeader from "../../components/ORGANISMS/ManegerHeader.component";

const useAuth = ()=>{
    const user = {loggedIn: false};
    return user && user.loggedIn;
}

function AdminLayout() {
    const isAuth = useAuth();
    return isAuth ? <><ManegerHeader></ManegerHeader><Outlet/></> : <Navigate to="/loginpage"/>;
    
}

export default AdminLayout;