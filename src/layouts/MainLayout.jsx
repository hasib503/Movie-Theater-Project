import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/shared/navbar/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
};

export default MainLayout;
