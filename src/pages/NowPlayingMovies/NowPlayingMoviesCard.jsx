import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import GetTicketModal from '../Modal/GetTicketModal';

const NowPlayingMoviesCard = ({ item }) => {
    const { name, image, duration, category } = item

    const [modal, setModal] = useState(false);

    const closeModal = () => {
        setModal(false)
    }

    return (
        <div>
            <div className='rounded-xl shadow-lg p-6 bg-blue-950 text-center my-5 flex flex-col justify-center items-center'>
                <div className=' mx-auto'>
                    <img src={image} alt="movie" className="w-[250px] h-[250px] mb-4 rounded-lg" />
                </div>

                <div>
                    <div className='text-fuchsia-600 font-bold text-2xl'>{name}</div>
                    <div className='flex flex-row gap-1'>
                        <p className='mb-4 text-fuchsia-600 text-sm'>{category}</p>
                        <p className='mb-4 text-fuchsia-600 text-sm'> <span>/</span> {duration}</p>

                    </div>
                    <Link><button onClick={() => setModal(true)} className='flex bg-gradient-to-r from-purple-600 to-red-400  text-center rounded-lg font-bold p-2'>Get Ticket</button></Link>

                </div>
             
            </div>
          <GetTicketModal isModalOpen={modal} closeModal={closeModal}></GetTicketModal>
        </div>
    );
};

export default NowPlayingMoviesCard;