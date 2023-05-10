import React from 'react';
import Bannar from './bannar/Bannar';
import About from './about us/About';
import Services from './services/Services';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Services></Services>
        </div>
    );
};

export default Home;