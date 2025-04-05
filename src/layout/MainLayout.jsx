import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

function MainLayout() {

    const location = useLocation();

  const shouldHide = location.pathname.startsWith('/projects/')
  
    return (
        <div className='max-w-7xl mx-auto'>
            {!shouldHide && <Navbar></Navbar>}
            <div className='px-10 min-h[calc(100vh-148px)]'>
            <Outlet></Outlet>
            </div>
            {!shouldHide && <Footer></Footer>}
        </div>
    );
}

export default MainLayout;