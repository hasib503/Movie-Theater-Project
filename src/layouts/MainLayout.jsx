import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";
import Footer from "../components/shared/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
};

export default MainLayout;
