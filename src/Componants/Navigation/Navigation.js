import React from 'react'
import './Navigation.css'
import { Link } from 'react-router-dom'

const Navigation = () => {
    return (
        <div className='row nav_div p-0'>
            <div className='col-lg-1 col-md-1 logo-div'>LOGO</div>
            <div className='col-lg-11 col-md-11 nav-div'>
            <ul className="nav mx-5 ">
                <li className="nav-item navbaritem">
                    <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item navbaritem">
                    <Link className="nav-link" to="/Login">Login</Link>
                </li>
                <li className="nav-item navbaritem">
                    <Link className="nav-link disabled" to="/New">Disabled</Link>
                </li>
                <li className="nav-item navbaritmes apply">
                    <Link className="nav-link" to="/Registration">Apply</Link>
                </li>
            </ul>
            </div>
        </div>
    )
}

export default Navigation