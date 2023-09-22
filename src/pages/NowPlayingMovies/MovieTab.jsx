import React from 'react';
import NowPlayingMoviesCard from './NowPlayingMoviesCard';

const MovieTab = ({items}) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-14 mb-1'>
                {
                    items.map((item, index) => <NowPlayingMoviesCard
                        key={index}
                        item={item}></NowPlayingMoviesCard>)
                }
                
            </div>
        </div>
    );
};

export default MovieTab;