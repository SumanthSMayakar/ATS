import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


function ProtectedRoute() {
    const token = localStorage.getItem("accessToken") || false;
    
  return (
    <React.Fragment>
        {
            token ? <Outlet/> : <Navigate to={`/login`} />
        }
    </React.Fragment>
  )
}

export default ProtectedRoute