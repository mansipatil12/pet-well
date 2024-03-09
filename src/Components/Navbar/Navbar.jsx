import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'

export const Navbar = () => {

  return (
    <div className='navbar'>
        <div className="logo">
            <img src={logo} alt="logo" style={{width: '100px', height: 'auto'}} />
            <p className="logo-text">PETWELL</p>
        </div>
        <ul className="nav-menu">
            <li>Home <hr/></li>
            <li>Community</li>
        </ul>
        <div className="nav-login">
            <button className="login-button">Login</button>
        </div>


    </div>
  )
}

export default Navbar