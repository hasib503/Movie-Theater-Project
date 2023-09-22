import React from 'react';

const Headings = ({ title, subtitle, center }) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className="font-light pt-14 ">{subtitle}</div>
            <div className="text-3xl font-bold mt-1 mb-1">{title}</div>
            
        </div>
    );
};

export default Headings;