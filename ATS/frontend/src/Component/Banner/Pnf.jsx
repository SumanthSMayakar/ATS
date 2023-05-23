import React from 'react'
import gif from '../images/404.gif'
import { NavLink } from 'react-router-dom';

function Pnf() {
  return (
    <div className="container">
        <div className="row mb-4">
            <div className="col-md-12 text-center">
                <img src={gif} alt="" className='img' style={{ width : '400px'}}/>
                <h3 className="display-4 text-danger ">404 Page Not Found</h3>
                <NavLink to={'/'} className="btn btn-outline-secondary mt-4">Back to Home</NavLink>
            </div>
        </div>
    </div>
  )
}

export default Pnf