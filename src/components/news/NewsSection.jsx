import React, { useEffect, useState } from 'react';
import Container from './../container/Container';
import { Link } from 'react-router-dom';

const NewsSection = () => {

    const [news, setNews] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/movieNewsList')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    // console.log(news);

    return (
        <Container>
            <h1 className='text-2xl lg:text-5xl font-semibold mb-8 mt-16 text-slate-400'>Latest News</h1>
            <div className='grid lg:grid-cols-10 gap-8 items-center mb-16'>
                <div className='lg:col-span-3 text-sm'>
                    <div>
                        {news.map(eachNews => (
                            <Link to={`/newsDetails/${eachNews._id}`} className='py-2 flex font-semibold text-slate-400 cursor-pointer hover:scale-105 hover:duration-200 px-2' key={eachNews.title}>
                                <img className='w-[100px] mr-4' src={eachNews.cover} alt="" />
                                <div>
                                    <p>{eachNews.title}</p>
                                    <p className='text-slate-500 mt-1 text-xs'>By <span className='font-bold'>{eachNews.author}</span> <span>{eachNews.date}</span></p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className='lg:col-span-7'>
                    <div className='grid lg:grid-cols-7 lg:grid-row-6 gap-4 justify-center'>
                        <div className='lg:col-span-4'>
                            <Link to={`/newsDetails/${news[0]?._id}`} className='relative cursor-pointer'>
                                <img className='rounded-md w-full' src={news[0]?.cover} alt="" />
                                <div className='absolute top-0 w-full h-full bg-black bg-opacity-50 hover:bg-opacity-20'>
                                    <div className='absolute bottom-0 px-4 pb-2 text-slate-400'>
                                        <p className='font-semibold mb-3'>"I'd Do It Again If I Had A Time Machine\": Addresses</p>
                                        <p>Gareth Edwards, the director of Rogue One: A Star Wars Story, has addressed behind-the-scenes drama of the Star Wars movie and has also shared his praises for George Lucas...</p>
                                    </div>
                                </div>
                            </Link>
                            <div className='grid lg:grid-cols-2 gap-4 mt-4'>
                                <Link to={`/newsDetails/${news[1]?._id}`} className='relative cursor-pointer'>
                                    <img className='rounded-md' src={news[1]?.cover} alt="" />
                                    <div className='absolute top-0 w-full h-full bg-black bg-opacity-40 hover:bg-opacity-20'>
                                        <div className='absolute bottom-0 lg:px-2 px-4 pb-2 text-slate-400'>
                                            <p className='font-semibold mb-1'>Hunger Games Returns To Theaters</p>
                                        </div>
                                    </div>
                                </Link>
                                <Link to={`/newsDetails/${news[2]?._id}`} className='relative cursor-pointer'>
                                    <img className='rounded-md' src={news[2]?.cover} alt="" />
                                    <div className='absolute top-0 w-full h-full bg-black bg-opacity-40 hover:bg-opacity-20'>
                                        <div className='absolute bottom-0 lg:px-2 px-4 pb-2 text-slate-400'>
                                            <p className='font-semibold mb-1'>Harry Potter As A War Movie Art Is An Odd Waste</p>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                        <div className='lg:col-span-3 lg:row-span-3'>
                            <Link to={`/newsDetails/${news[3]?._id}`} className='relative cursor-pointer'>
                                <img className='rounded-md mb-4' src={news[3]?.cover} alt="" />
                                <div className='absolute top-0 w-full h-full bg-black bg-opacity-40 hover:bg-opacity-20'>
                                    <div className='absolute bottom-0 lg:px-2 px-4 pb-2 text-slate-400'>
                                        <p className='font-semibold mb-1'>Chris Pine's First Movie As A Director</p>
                                    </div>
                                </div>
                            </Link>
                            <Link to={`/newsDetails/${news[4]?._id}`} className='relative cursor-pointer'>
                                <img className='rounded-md mb-4' src={news[4]?.cover} alt="" />
                                <div className='absolute top-0 w-full h-full bg-black bg-opacity-40 hover:bg-opacity-20'>
                                    <div className='absolute bottom-0 lg:px-2 px-4 pb-2 text-slate-400'>
                                        <p className='font-semibold mb-1'>Transformers: Rise Of The Beasts Physical Release</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default NewsSection;