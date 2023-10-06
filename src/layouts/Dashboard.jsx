import React, { useState } from "react";
// import Navbar from "../components/shared/navbar/Navbar";
import { NavLink, Outlet } from "react-router-dom";
import mainLogo from "../assets/main-logo.png";
import { AiFillHome, AiFillPlusCircle } from "react-icons/ai";
import { MdVideoLibrary } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import "./dashboardStyle.css";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItem = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "d-active" : "d-default")}
        >
          <span className="mr-6">
            <AiFillHome size={24}></AiFillHome>
          </span>
          <span>Home</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/addMovie"
          className={({ isActive }) => (isActive ? "d-active" : "d-default")}
        >
          <span className="mr-6">
            <AiFillPlusCircle size={24}></AiFillPlusCircle>
          </span>
          <span>Add Movie</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/allMovies"
          className={({ isActive }) => (isActive ? "d-active" : "d-default")}
        >
          <span className="mr-6">
            <MdVideoLibrary size={24}></MdVideoLibrary>
          </span>
          <span>All Movies</span>
        </NavLink>
      </li>
    </>
  );
  return (
    <>
      {/* NAVBAR */}
      {/* <Navbar></Navbar> */}
      <div className="flex lg:flex-row flex-col text-white min-h-screen overflow-y-hidden">
        <div className="lg:border-r p-2 ">
          {/* Site Logo */}
          <div className="text-center flex flex-col items-center glass-bg p-2 relative">
            <img className="w-[35px] md:w-[50px]" src={mainLogo} alt="Logo" />
            <h2 className="text-2xl font-light">Movie- Dashboard</h2>
            <div
              onClick={() => setIsOpen(!isOpen)}
              className="absolute right-0 top-1/3 lg:hidden cursor-pointer"
            >
              <span className="text-[#4b4fbd]">
                <HiDotsVertical size={24}></HiDotsVertical>
              </span>
            </div>
          </div>
          {/* Nav Items */}
          <div className="hidden lg:block">
            <ul>{navItem}</ul>
          </div>
          {/* Mobile Nav Item */}
          <div
            className={`lg:hidden glass-bg  w-[95%] transition-all duration-300 ${
              isOpen ? "fixed bottom-2 block z-50" : " hidden"
            }`}
          >
            <div className=" flex justify-end p-2">
              <button onClick={() => setIsOpen(!isOpen)} className="border p-2">
                close
              </button>
            </div>
            <ul className=" px-2">{navItem}</ul>
          </div>
        </div>
        <div className="w-full lg:p-10">
          <Outlet></Outlet>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
