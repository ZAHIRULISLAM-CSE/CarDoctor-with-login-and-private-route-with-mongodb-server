import React, { useState } from 'react';

const Services = () => {
    const [services,setServices]=useState([]);




    return (
        <div className='mt-8 ' >
            <h1 className='text-center text-xl font-semibold text-[#FF3811]'>Service</h1>
            <h1 className='text-4xl mt-4 text-center'>Our Service Area</h1>
            <p className='text-sm mt-8 font-semibold text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
        </div>
    );
};

export default Services;