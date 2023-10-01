import React from 'react';

const OurJourney = () => {
    return (
        <div>
            <h2 className='text-3xl lg:text-4xl font-semibold mb-3 text-slate-400'>Our Journey</h2>
            <hr className='border-2 border-slate-500 mb-3' />
            <div className='text-slate-500'>
                <p>We are a team of movie lovers who are passionate about making moviegoing as convenient and enjoyable as possible. That's why we created this site, the easiest way to book movie tickets online.</p>
                <br />
                <p>With our website, you can browse and book tickets for all the latest movies playing at your local theaters, all in one place. We also offer a variety of features to make your moviegoing experience even better, including:</p>
                <ul className='list-disc list-inside'>
                    <li><span className='font-bold'>Interactive seat maps:</span> See which seats are available in real time and choose the perfect spot for you and your friends.</li>
                    <li><span className='font-bold'>Exclusive deals and discounts:</span> Get the best prices on movie tickets and concessions with our exclusive deals and discounts.</li>
                    <li><span className='font-bold'>Easy checkout:</span> Book your tickets with just a few clicks and pay with your preferred payment method.</li>
                    <li><span className='font-bold'>Mobile app:</span> Book tickets on the go with our convenient mobile app.</li>
                </ul>
                <br />
                <p>We're committed to providing our customers with the best possible moviegoing experience. That's why we offer 24/7 customer support and a satisfaction guarantee on all of our tickets.</p>
                <br />
                <p className='text-lg font-semibold'>Book your movie tickets today and experience the difference that the site can make!</p>
            </div>
        </div>
    );
};

export default OurJourney;