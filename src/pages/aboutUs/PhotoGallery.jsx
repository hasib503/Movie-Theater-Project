import React from 'react';

const PhotoGallery = () => {
    return (
        <div>
            <h2 className='text-3xl lg:text-4xl font-semibold mb-3 text-slate-400'>Photo Gallery</h2>
            <hr className='border-2 border-slate-500 mb-3' />
            <div className='text-slate-500'>
                <div className='grid lg:grid-cols-3 gap-2 my-6'>
                    <img src="https://images.pexels.com/photos/8261819/pexels-photo-8261819.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <img src="https://images.pexels.com/photos/7991318/pexels-photo-7991318.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <img src="https://images.pexels.com/photos/8263362/pexels-photo-8263362.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <img src="https://images.pexels.com/photos/8273523/pexels-photo-8273523.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <img src="https://images.pexels.com/photos/7991238/pexels-photo-7991238.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <img src="https://images.pexels.com/photos/65437/pexels-photo-65437.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <img src="https://images.pexels.com/photos/2507025/pexels-photo-2507025.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <img src="https://images.pexels.com/photos/157543/pexels-photo-157543.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                    <img src="https://images.pexels.com/photos/7234238/pexels-photo-7234238.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
                </div>
            </div>
        </div>
    );
};

export default PhotoGallery;