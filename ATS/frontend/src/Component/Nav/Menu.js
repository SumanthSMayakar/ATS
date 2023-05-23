import axios from "axios";
import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GlobalContext } from "../../GlobalContext";
import '../style/bannerstyle.css'



function Menu(props) {
  const context = useContext(GlobalContext)

  const [isLogged, setIsLogged ] = context.useAuth.isLogged ? context.useAuth.isLogged : false;
  const [isUser, setIsUser ] = context.useAuth.isUser ? context.useAuth.isUser : false;
  const [isAdmin, setIsAdmin ] = context.useAuth.isAdmin ? context.useAuth.isAdmin : false;

  const navigate = useNavigate()

  
  const adminRoute = ()=>{
    return (
        <ul className='navbar-nav'>
            <li className="nav-item dropdown">
                <NavLink to={`/`} onClick={logoutUser} className="btn btn-outline-secondary">Sign Out</NavLink>
                {/* <NavLink to={`/`} className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown">
                    <i className="bi bi-person text-dark"></i>
                </NavLink>
                <ul className="dropdown-menu ">
                    <li>
                        <NavLink to={`/admin/dashboard`} className="dropdown-item text-dark">Dashboard</NavLink>
                        <NavLink to={`/admin/managejobs`} className="dropdown-item text-dark">Jobs List</NavLink>
                        <NavLink to={`/admin/createjobs`} className="dropdown-item text-dark">Create Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink to={`/`} onClick={logoutUser} className="dropdown-item text-dark">Sign Out</NavLink>
                    </li>
                </ul> */}
            </li>
        </ul>
    )
}


const userRoute = ()=>{
    return (
        <ul className='navbar-nav'>
            <li className="nav-item dropdown">
                <NavLink to={`/`} onClick={logoutUser} className="btn btn-outline-secondary">Sign Out</NavLink>


                {/* <NavLink to={`/`} className="nav-link dropdown-toggle text-dark" data-bs-toggle="dropdown">
                    <i className="bi bi-person text-dark"></i>
                </NavLink>
                <ul className="dropdown-menu w-50">
                    <li>
                        <NavLink to={`/user/dashboard`} className="dropdown-item text-dark">Dashboard</NavLink>
                        <NavLink to={`/user/managejobs`} className="dropdown-item text-dark">Jobs List</NavLink>                
                    </li>
                    <li>
                        <NavLink to={`/`} onClick={logoutUser} className="dropdown-item text-dark">Sign Out</NavLink>
                    </li>
                </ul> */}
            </li>
        </ul>
    )
}

const commonRoute = ()=>{
    return (
        <ul className="navbar-nav">
                <li className="nav-item mx-1">
                    <NavLink to={`/login`} className="nav-link btn btn-outline-warning text-dark">Sign In</NavLink>
                </li>
                <li className="nav-item mx-1">
                    <NavLink to={`/register`} className="nav-link btn btn-outline-info text-dark">Sign Up</NavLink>
                </li>
            </ul>
    )
}

// logout
const logoutUser = async ()=>{
    if(window.confirm(`Are you Sure to logout..?`)){
        try {
            const res = await axios.get(`/api/v1/auth/logout`)
            localStorage.clear()
            toast(res.data.msg)
            setIsAdmin(false)
            setIsLogged(false)
            setIsUser(false)
            navigate(`/`)
            window.location.href="/"
        } catch (err) {
            toast.error(err.response.data.msg)                
        }
    }
    else{
        toast.warning('Logout Terminating.')
    }
}


  return (
    <nav className="navbar navbar-expand-md navbar-dark" id="headermenu">
      <div className="container-fluid">
          <NavLink to={`/`} className="navbar-brand fw-bold display-5 text-dark" >
            Phoenix
          </NavLink> 
          <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#menu">
            <span className="navbar-toggler-icon"></span>
          </button>
        

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav ms-auto">
            {/* <li className="nav-item mx-1">
              <NavLink to={`/`} className="nav-link text-dark">
                Home
              </NavLink>
            </li> */}
          </ul>
          {
                    isLogged ? (
                        <React.Fragment>
                            {
                                isAdmin ? adminRoute() : null
                            }
                            {
                                isUser ? userRoute() : null
                            }
                        </React.Fragment>
                    ) : commonRoute()
                }
            {/* <li className="nav-item mx-2">
              <NavLink to={`/login`} className="nav-link btn btn-outline-danger">Sign-In</NavLink>
                           
            </li>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}

export default Menu;
