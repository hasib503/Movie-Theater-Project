import React from 'react';



const NowPlayingMoviesCard = ({ item }) => {
    const { name, image, duration, category } = item
    return (
        <div>
            <div className='rounded-xl shadow-lg p-6 bg-blue-100 text-center my-5 flex flex-col justify-center items-center'>
                <div className=' mx-auto'>
                    <img src={image} alt="movie" className="w-[250px] h-[250px] mb-4 rounded-lg" />
                </div>
                <div>

                    <h2 className="">{name}</h2>
                    <div className='flex flex-row gap-1'>
                        <p className='mb-4 text-pink-600 text-xl'>{category}</p>
                        <p className='mb-4 text-pink-600 text-xl'> <span>/</span> {duration}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default NowPlayingMoviesCard;