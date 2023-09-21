import React from 'react';

const Headings = ({ title, subtitle, center }) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className="font-light pt-14 ">{subtitle}</div>
            <div className="text-2xl font-bold my-2">{title}</div>
            
        </div>
    );
};

export default Headings;