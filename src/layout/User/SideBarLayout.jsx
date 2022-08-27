import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "../../components/ORGANISMS/Footer.component";
import Header from "../../components/ORGANISMS/HeaderUser.component";
import SideBar from "../../components/ORGANISMS/SideBar.component";

const SideBarLayout = () => {
  return (
    <>
      <Header />
      <Box>
      <SideBar />
      UserLayoutSideBar
      </Box>
      <Outlet />
      <Footer />
    </>
  );
};

export default SideBarLayout;
