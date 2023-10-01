import React from 'react';

const OurTheaters = () => {
    return (
        <div>
            <h2 className='text-3xl lg:text-4xl font-semibold mb-3 text-slate-400'>Our Theaters</h2>
            <hr className='border-2 border-slate-500 mb-3' />
            <div className='text-slate-500 grid lg:grid-cols-2 gap-6 lg:gap-8 lg:my-6'>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" /></figure>
                    <div className="card-body bg-[#0B2447]">
                        <h2 className="card-title">Gulshan Movie Theater</h2>
                        <p>Gulshan Movie Theater, located in the heart of Gulshan, Dhaka, is a new state-of-the-art theater that offers audiences an immersive and cinematic experience. With the latest projection and sound technology, comfortable seating, and a variety of food and beverage options.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://images.pexels.com/photos/2774568/pexels-photo-2774568.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" /></figure>
                    <div className="card-body bg-[#0B2447]">
                        <h2 className="card-title">Banani Movie Theater</h2>
                        <p>Banani Movie Theater, located in the heart of Bananu, Dhaka, is a new state-of-the-art theater that offers audiences an immersive and cinematic experience. With the latest projection and sound technology, comfortable seating, and a variety of food and beverage options.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://images.pexels.com/photos/3689547/pexels-photo-3689547.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" /></figure>
                    <div className="card-body bg-[#0B2447]">
                        <h2 className="card-title">Bashundhara Movie Theater</h2>
                        <p>Bashundhara Movie Theater, located in the heart of Bashundhara, Dhaka, is a new state-of-the-art theater that offers audiences an immersive and cinematic experience. With the latest projection and sound technology, comfortable seating, and a variety of food and beverage options.</p>
                    </div>
                </div>
                <div className="card w-full bg-base-100 shadow-xl">
                    <figure><img src="https://images.pexels.com/photos/7991178/pexels-photo-7991178.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Shoes" /></figure>
                    <div className="card-body bg-[#0B2447]">
                        <h2 className="card-title">Matijheel Movie Theater</h2>
                        <p>Matijheel Movie Theater, located in the heart of Matijheel, Dhaka, is a new state-of-the-art theater that offers audiences an immersive and cinematic experience. With the latest projection and sound technology, comfortable seating, and a variety of food and beverage options.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurTheaters;