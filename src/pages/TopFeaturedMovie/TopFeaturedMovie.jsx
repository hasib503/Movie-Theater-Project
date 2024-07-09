import React from 'react';
import './topfeaturedmovie.css'
import Headings from '../../components/shared/Headings/Headings';
import UseItem from '../../Hooks/UseItem';
import TopFeaturedMovieData from './TopFeaturedMovieData';


const TopFeaturedMovie = () => {
    const [item] = UseItem();
    return (
        <div>
           <Headings
             title='Top Featured Movies'
             center={true}>
           </Headings>  
            <div className='grid grid-cols-1 md:grid-cols-2 gap-14 mb-4'>
                {
                    item.slice(0, 2).map((movie, index) => <TopFeaturedMovieData
                    key={index}
                    movie={movie}>
                    </TopFeaturedMovieData>)
                }
            </div>
         
           
        </div>
    );
};

export default TopFeaturedMovie;