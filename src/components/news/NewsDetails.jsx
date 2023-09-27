import React, { useEffect, useState } from 'react';
import Container from './../container/Container';
import { useLoaderData } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaGoogle, FaPinterest } from 'react-icons/fa'

const NewsDetails = () => {

    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/movieNewsList')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    const newsDetails = useLoaderData()

    // console.log(newsDetails);

    return (
        <Container>
            <div className='grid lg:grid-cols-10 lg:gap-12 my-4'>

                <div className='lg:col-span-6'>
                    <div className='max-w-[800px] m-auto'>
                        <img className='rounded-md w-full' src={newsDetails?.cover} alt="" />
                    </div>
                    <h2 className='mt-4 font-bold text-lg lg:text-3xl text-slate-300'># {newsDetails?.title}</h2>
                    <p className='mt-3 text-slate-400 text-justify'>{newsDetails?.description}</p>
                </div>


                <div className='lg:col-span-4 text-sm'>
                    <div className='lg:mt-2 mt-8 mb-8'>
                        <div className='flex gap-5 justify-center'>
                            <FaFacebook size={36} className='text-slate-500 hover:text-white hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer'></FaFacebook>
                            <FaInstagram size={36} className='text-slate-500 hover:text-white hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer'></FaInstagram>
                            <FaTwitter size={36} className='text-slate-500 hover:text-white hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer'></FaTwitter>
                            <FaGoogle size={36} className='text-slate-500 hover:text-white hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer'></FaGoogle>
                            <FaPinterest size={36} className='text-slate-500 hover:text-white hover:scale-110 hover:transition-all hover:duration-300 cursor-pointer'></FaPinterest>
                        </div>
                    </div>
                    <div>
                        {news.map(eachNews => (
                            <Link to={`/newsDetails/${eachNews._id}`} className='py-3 flex font-semibold text-slate-400 cursor-pointer hover:scale-105 hover:duration-200 px-2' key={eachNews.title}>
                                <img className='w-[100px] mr-4 rounded-md' src={eachNews.cover} alt="" />
                                <div>
                                    <p>{eachNews.title}</p>
                                    <p className='text-slate-500 mt-1 text-xs'>By <span className='font-bold'>{eachNews.author}</span> <span>{eachNews.date}</span></p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default NewsDetails;