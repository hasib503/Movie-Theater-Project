import React from 'react';
import PrimaryBtn from '../../primaryBtn/PrimaryBtn';
import './footer.css';
import moment from 'moment';
import mainLogo from "../../../assets/main-logo.png";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { FaInstagramSquare } from "react-icons/fa";
import { BsFillArrowUpRightCircleFill } from "react-icons/bs";


const Footer = () => {
    return (
        <footer>
            
            <div className='bg p-10'>
                <div className='max-w-6xl mx-auto '>
                    <div className='pb-2  md:pb-10 flex flex-row justify-between items-center'>
                        <div className='flex flex-row items-center gap-4'>
                            <img className='' src={mainLogo} width='40' height='20' alt="logo" />
                            <p className='text-white font-bold text-2xl hidden md:block'>Movie Theater</p>
                        </div>
                        <div>

                            <div className='text-white md:flex flex-row justify-center items-center gap-8'>
                                <div>
                                    <p className='text-slate-400 hidden md:block'>Help/Privacy</p>
                                </div>
                                <div className='flex flex-row justify-center items-center gap-2'>
                                    <AiOutlineTwitter className='icon'></AiOutlineTwitter>
                                    <BiLogoFacebookCircle className='icon'></BiLogoFacebookCircle>
                                    <FaInstagramSquare className='icon'></FaInstagramSquare>
                                </div>
                            </div>

                        </div>
                    </div>
                    <hr className='mb-8'></hr>
                    <div className='grid grid-clos-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                        <div>
                            <p className='mr-8 footer-text'>Buy movie tickets easily with Movie Theater system nationwide</p>
                            <div className='mt-4'>
                                <PrimaryBtn title="Get Ticket"></PrimaryBtn>
                            </div>
                        </div>
                        <div>
                            <div className='footer-menu '>
                                <p className='text-pink-600 font-semibold text-xl'>Links</p>
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
                            <div className='footer-menu'>
                                <p className='text-pink-600 font-semibold text-xl'>Movies</p>
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
                            <div className='footer-menu'>
                                <p className='text-pink-600 font-semibold text-xl'>Newsletter</p>
                            </div>

                            <div className='mt-8 footer-text'>
                                <p>Subscribe to Leitmotif newsletter this very day.</p>
                                <form action="">
                                    <input
                                        className='py-1 px-1 rounded-xl'
                                        type="email"
                                        required
                                        placeholder='Email' />

                                    <button className='bg-slate-600 rounded-full ml-2 p-2 mt-2 hover:bg-slate-400'><BsFillArrowUpRightCircleFill className=''></BsFillArrowUpRightCircleFill></button>
                                </form>
                            </div>
                        </div>


                    </div>

                    <hr className=' mt-8 '></hr>

                    <div className='copyright md:text-center mt-4'>
                        <p>Copyright <span>{moment().format("YYYY")}</span> by movietheater.com</p>
                    </div>


                </div>



            </div>
        </footer>
    );
};

export default Footer;