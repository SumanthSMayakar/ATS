import React from 'react'
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='container-fluid mt-4' id='footershadow'>
             <footer className="row p-4 text-center text-white" >
                <div className="text-center p-3 text-dark">
                        © 2023 Copyright:
                        <a className="text-dark text-decoration-none" href='/'> ATSCareer.com</a>
                </div>
            </footer>
    </div>
  )
}

export default Footer