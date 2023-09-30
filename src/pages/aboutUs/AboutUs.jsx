import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Container from './../../components/container/Container';
import OurJourney from './OurJourney';
import OurTheaters from './OurTheaters';
import PhotoGallery from './PhotoGallery';
import Marquee from "react-fast-marquee";

const AboutUs = () => {
    const [openJourney, setOpenJourney] = useState(true)
    const [openTheaters, setOpenTheaters] = useState(false)
    const [openPhotoGallery, setOpenPhotoGallery] = useState(false)

    return (
        <Container>
            <div className='grid lg:grid-cols-10 mt-8 gap-4 lg:gap-10'>
                <div className='lg:col-span-7'>
                    {openJourney && <OurJourney></OurJourney>}
                    {openTheaters && <OurTheaters></OurTheaters>}
                    {openPhotoGallery && <PhotoGallery></PhotoGallery>}
                </div>

                <div className='lg:col-span-3 text-slate-500 mt-3'>
                    <div className='mb-6 lg:mb-10 font-semibold text-lg bg-black p-6'>
                        <Link
                            onClick={() => {
                                setOpenJourney(true)
                                setOpenTheaters(false)
                                setOpenPhotoGallery(false)
                            }}
                            to='/about-us'><p className='my-2 hover:bg-[#001232]'>Our Journey</p></Link>
                        <hr className='border-red-500' />
                        <Link
                            onClick={() => {
                                setOpenJourney(false)
                                setOpenTheaters(true)
                                setOpenPhotoGallery(false)
                            }}
                            to='/about-us'><p className='my-2 hover:bg-[#001232]'>Our Theaters</p></Link>
                        <hr className='border-red-500' />
                        <Link
                            onClick={() => {
                                setOpenJourney(false)
                                setOpenTheaters(false)
                                setOpenPhotoGallery(true)
                            }}
                            to='/about-us'><p className='my-2 hover:bg-[#001232]'>Photo Gallery</p></Link>
                    </div>
                    <div className='mb-6 font-semibold text-lg bg-black p-6'>
                        <h2 className='mb-4 font-bold'>Upcoming Events</h2>
                        <Marquee speed={40}>
                            <p className='my-2'>---Our upcoming movie "The Nun 2" is running in all our theaters---</p>
                        </Marquee>
                        <hr className='border-red-500' />
                        <Marquee speed={40}>
                            <p className='my-2'>---Grand Opening will be held in the 10 October, 2023---</p>
                        </Marquee>
                        <hr className='border-red-500' />
                        <Marquee speed={40}>
                            <p className='my-2'>---Film star Leonardo Decaprion will visit Gulshan Theater for movie promotion---</p>
                        </Marquee>
                        <hr className='border-red-500' />
                        <Marquee speed={40}>
                            <p className='my-2'>---Special discounts for the movie "The Phantom Dilux"---</p>
                        </Marquee>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default AboutUs;