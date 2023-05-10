import React, { useEffect, useState } from 'react';
import ServicesCard from './ServicesCard';

const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch("services.json")
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])

    console.log(services)

    return (
        <div className='mt-8 ' >
            <h1 className='text-center text-xl font-semibold text-[#FF3811]'>Service</h1>
            <h1 className='text-4xl mt-4 text-center'>Our Service Area</h1>
            <p className='text-sm mt-8 font-semibold text-center'>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
                {
                    services.map(service=><ServicesCard  key={service._id} service={service}  ></ServicesCard>)
                }
            </div>
        </div>
    );
};

export default Services;