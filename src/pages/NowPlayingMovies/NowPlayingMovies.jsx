import React, { useState } from 'react';
import Headings from '../../components/shared/Headings/Headings';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import UseItem from '../../Hooks/UseItem';
import MovieTab from './MovieTab';



const NowPlayingMovies = () => {

    const [tabIndex, setTabIndex] = useState(0);
    const [item] = UseItem();
    const thriller = item.filter(item => item.category === 'Thriller');
    const action = item.filter(item => item.category === 'Action');
    const comedy = item.filter(item => item.category === 'Comedy');

    return (
        <div>
            <Headings
                subtitle='Watch New Movies'
                title='Movies Now Playing'
                center={true}>
            </Headings>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-center items-center mx-10  lg:text-lg'>
                        <Tab className="bg-gradient-to-r from-pink-500 to-indigo-500 via-purple-500  text-center rounded-lg font-bold text-white"><button  >Thriller</button></Tab>
                        <Tab className="bg-gradient-to-r from-pink-500 to-indigo-500 via-purple-500 text-center rounded-lg font-bold text-white"><button  >Action</button></Tab>
                        <Tab className="bg-gradient-to-r from-pink-500 to-indigo-500 via-purple-500 text-center rounded-lg font-bold text-white"><button >Comedy</button></Tab>

                    </div>
                </TabList>
                <TabPanel>
                    <MovieTab items={thriller}></MovieTab>
                </TabPanel>
                <TabPanel>
                    <MovieTab items={action}></MovieTab>
                </TabPanel>
                <TabPanel>
                    <MovieTab items={comedy}></MovieTab>
                </TabPanel>


            </Tabs>


        </div>
    );
};

export default NowPlayingMovies;