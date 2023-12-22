import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';



function PrivateRoute() {
    useEffect(() => {
        document.body.classList.remove('login-page', 'hold-transition')
        document.body.classList.add('sidebar-mini', 'layout-fixed')
    }, [])


    return (
        <>
            <div className="wrapper">
                <Navbar />
                <Sidebar />
                <Outlet />
                <Footer />
            </div>
        </>
    )
}

export default PrivateRoute