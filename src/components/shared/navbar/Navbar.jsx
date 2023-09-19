import React from "react";
import Container from "../../container/Container";
import { Link } from "react-router-dom";
import mainLogo from "../../../assets/main-logo.png";

const Navbar = () => {

  const user = false;

  const navBarItems = <>
    <li><Link to='/' className="hover:bg-[#79155B] hover:text-white">Home</Link></li>
    <li><Link to='/showtime' className="hover:bg-[#79155B] hover:text-white">ShowTime</Link></li>
    <li><Link to='/about-us' className="hover:bg-[#79155B] hover:text-white">About Us</Link></li>
    <li><Link to='/membership' className="hover:bg-[#79155B] hover:text-white">Membership</Link></li>
    <li><Link to='/food-corner' className="hover:bg-[#79155B] hover:text-white">Food Corner</Link></li>
    <li><Link to='/career' className="hover:bg-[#79155B] hover:text-white">Career</Link></li>
    <li><Link to='/ticket-price' className="hover:bg-[#79155B] hover:text-white">Ticket Price</Link></li>
    <li><Link to='/contact' className="hover:bg-[#79155B] hover:text-white">Contact</Link></li>
    <li><Link to='/login' className="hover:bg-[#79155B] hover:text-white">Login</Link></li>
  </>

  return (
    <div>
      <Container>
        <div className="navbar bg-[#4b004a] text-white font-semibold">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              </label>
              <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 bg-[#4b004a] text-white rounded-box w-52 flex gap-2">
                {navBarItems}
              </ul>
            </div>
            {/* navbar logo */}
            <img className="w-[35px] md:w-[50px] py-3" src={mainLogo} alt="" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              {navBarItems}
            </ul>
          </div>
          <div className="navbar-end">
            {/* search field */}
            <div className="form-control inline-flex">
              <input type="text" placeholder="Search" className="input input-bordered w-36 md:w-auto bg-[#79155B]" />
            </div>
            {/* profile photo */}
            {/* In small device it will be hidden in large device it will be shown (only if there is logged in user) */}
            <div className="avatar lg:block hidden">
              <div className="w-10 mx-4 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user ? user?.displayname : ''} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;