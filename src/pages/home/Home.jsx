import React from 'react';
import Bannar from './bannar/Bannar';
import About from './about us/About';
import Services from './services/Services';
import MoreServices from './services/MoreServices';

const Home = () => {
    return (
        <div>
            <Bannar></Bannar>
            <About></About>
            <Services></Services>
            <MoreServices></MoreServices>
        </div>
    );
};

export default Home;