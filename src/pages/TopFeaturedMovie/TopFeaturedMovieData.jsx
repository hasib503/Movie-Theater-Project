import React from 'react';
import { Link } from 'react-router-dom';


const TopFeaturedMovieData = ({ movie }) => {
    const { name, image, duration, category } = movie
    return (
        <div>
            <div className='rounded-xl shadow-lg p-6  text-center my-5 flex flex-col justify-center items-center'>
                <div className=' mx-auto'>
                    <img src={image} alt="movie" className="w-[550px] h-[250px] mb-4 rounded-lg" />
                </div>

                <div className='md:bg-purple-100 md:w-[460px] md:p-5 md:-m-8 rounded-sm'>
                    <div className='text-fuchsia-600 font-bold text-2xl text-left'>{name}</div>
                    <div className='flex flex-row gap-1 mb-2'>
                        <p className=' text-fuchsia-600 text-sm'>{category}</p>
                        <p className=' text-fuchsia-600 text-sm'> <span>/</span> {duration}</p>

                    </div>

                    <Link><button className='flex bg-gradient-to-r from-purple-600 to-red-400 text-center rounded-lg font-bold p-2'>Watch Trailer</button></Link>
                </div>
            </div>
        </div>
    );
};

export default TopFeaturedMovieData;