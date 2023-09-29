import React from "react";
import PrimaryBtn from "../../primaryBtn/PrimaryBtn";
import "./footer.css";
import moment from "moment";
import mainLogo from "../../../assets/main-logo.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";
import Container from "../../container/Container";

const Footer = () => {
  return (
    <footer>
      <div className="bg-zinc-950">
        <Container>
          <div className="">
            <div className="py-2  md:py-10 flex flex-row justify-between items-center ">
              <div className="flex flex-row items-center gap-4 ">
                <img
                  className=""
                  src={mainLogo}
                  width="40"
                  height="20"
                  alt="logo"
                />
                <p className="text-white font-bold text-2xl hidden md:block">
                  Movie Theater
                </p>
              </div>
              <div>
                <div className="md:flex flex-row justify-center items-center gap-8">
                  <div className="flex flex-row justify-center items-center gap-8">
                    <AiOutlineTwitter className="icon"></AiOutlineTwitter>
                    <BiLogoFacebookCircle className="icon"></BiLogoFacebookCircle>
                    <FaInstagramSquare className="icon"></FaInstagramSquare>
                  </div>
                </div>
              </div>
            </div>
            <hr className="mb-8"></hr>
            <div className="grid grid-clos-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <p className="mr-8 footer-text">
                  Buy movie tickets easily with Movie Theater system nationwide
                </p>
                <div className="mt-4">
                  <PrimaryBtn title="Get Ticket"></PrimaryBtn>
                </div>
              </div>
              <div>
                <div className="footer-menu ">
                  <p className="text-pink-600 font-semibold">Links</p>
                </div>
                <ul>
                  <li>About</li>
                  <li>My Account</li>
                  <li>News</li>
                  <li>Latest Events</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div>
                <div className="footer-menu">
                  <p className="text-pink-600 font-semibold">Movies</p>
                </div>

                <ul>
                  <li>Action</li>
                  <li>Adventure</li>
                  <li>Animation</li>
                  <li>Comedy</li>
                  <li>Crime</li>
                </ul>
              </div>

              <div>
                <div className="footer-menu">
                  <p className="text-pink-600 font-semibold">Newsletter</p>
                </div>

                <div className="mt-8 footer-text">
                  <p>Subscribe to Leitmotif newsletter this very day.</p>
                  <form action="" className="flex items-center mt-5">
                    <input
                      className="focus-visible:outline-none text-black p-1 px-3 rounded-s-full"
                      type="email"
                      required
                      placeholder="Enter email"
                    />

                    <button className="primary-btn-bg px-3 py-2 rounded-e-full ">
                      <BsFillArrowUpRightCircleFill
                        size={20}
                      ></BsFillArrowUpRightCircleFill>
                    </button>
                  </form>
                </div>
              </div>
            </div>

            <hr className=" mt-8 "></hr>

            <div className="copyright md:text-center py-4">
              <p>
                &copy; Copyright <span>{moment().format("YYYY")}</span> by
                movietheater.com
              </p>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
