import React, { useState } from "react";
// import Navbar from "../components/shared/navbar/Navbar";
import { Link, NavLink, Outlet } from "react-router-dom";
import mainLogo from "../assets/main-logo.png";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineFavorite } from "react-icons/md";
import { HiDotsVertical } from "react-icons/hi";
import { FaUserAlt, FaHistory, FaSignOutAlt } from "react-icons/fa"
import "./dashboardStyle.css";
import Container from "../components/container/Container";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Dashboard = () => {
    const { user } = useContext(AuthContext)
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
                    to="/userDashboard/profile"
                    className={({ isActive }) => (isActive ? "d-active" : "d-default")}
                >
                    <span className="mr-6">
                        <FaUserAlt size={24}></FaUserAlt>
                    </span>
                    <span>Profile</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/userDashboard/ticketHistory"
                    className={({ isActive }) => (isActive ? "d-active" : "d-default")}
                >
                    <span className="mr-6">
                        <FaHistory size={24}></FaHistory>
                    </span>
                    <span>Ticket History</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/userDashboard/favorite"
                    className={({ isActive }) => (isActive ? "d-active" : "d-default")}
                >
                    <span className="mr-6">
                        <MdOutlineFavorite size={24}></MdOutlineFavorite>
                    </span>
                    <span>Favorite Movies</span>
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive }) => (isActive ? "d-active" : "d-default")}
                >
                    <span className="mr-6">
                        <FaSignOutAlt size={24}></FaSignOutAlt>
                    </span>
                    <span>Sign Out</span>
                </NavLink>
            </li>
        </>
    );
    return (
        <Container>
            {/* NAVBAR */}
            {/* <Navbar></Navbar> */}
            <div className="flex lg:flex-row flex-col text-white min-h-screen overflow-hidden">
                <div className="lg:border-r p-2 lg:w-[400px]">
                    {/* Site Logo */}
                    <div className="text-center flex flex-col items-center glass-bg p-2 relative">
                        <img className="w-[100px] md:w-[100px]" src={user?.photoURL} alt="Logo" />
                        <h2 className="text-xl font-light mt-2">{user?.displayName}</h2>
                        <h2 className="text-sm font-light my-2">{user?.email}</h2>
                        <Link to='/userDashboard/editProfile' className="font-light border-2 rounded-lg bg-[#071952] hover:bg-[#4b4fbd] py-1 px-3 my-2">Edit Profile</Link>
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
                        className={`lg:hidden glass-bg absolute w-[95%] transition-all duration-300 ${isOpen ? "bottom-[10px]" : "-bottom-[100%]"
                            }`}
                    >
                        <ul className=" px-2">{navItem}</ul>
                    </div>
                </div>
                <div className="w-full lg:p-10">
                    <Outlet></Outlet>
                </div>
            </div>
        </Container>
    );
};

export default Dashboard;