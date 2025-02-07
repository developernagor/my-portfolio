import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function MainLayout() {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar></Navbar>
            <div className='px-10 min-h[calc(100vh-148px)]'>
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default MainLayout;