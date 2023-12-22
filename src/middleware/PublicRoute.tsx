import React, { useEffect } from 'react'
import { Outlet, Navigate } from 'react-router-dom';

function PublicRoute() {
    useEffect(() => {
        document.body.classList.remove('sidebar-mini', 'layout-fixed')
        document.body.classList.add('login-page', 'hold-transition')
    }, [])

    return (
        <>
            <Outlet />
        </>
    )
}

export default PublicRoute