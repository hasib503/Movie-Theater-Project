import React from 'react';

const Headings = ({ title, subtitle, center }) => {
    return (
        <div className={center ? 'text-center' : 'text-start'}>
            <div className="text-2xl font-bold pt-14">{title}</div>
            <div className="font-light mt-2">{subtitle}</div>
        </div>
    );
};

export default Headings;