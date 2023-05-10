import React from 'react';
import Home from '../pages/home/Home';
import Nav from '../pages/home/nav/Nav';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;