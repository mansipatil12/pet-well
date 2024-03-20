import React, { useContext, useRef, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import nav_dropdown from '../Assets/nav_dropdown.png'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const [menu,setMenu] = useState("shop");
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
    }

  return (
    <div className='navbar'>
      <Link to='/' onClick={()=>{setMenu("Home")}} className="nav-logo">
        <img src={logo} alt="" />
        <p>PETWELL</p>
      </Link>
      <img onClick={dropdown_toggle} className='nav-dropdown' src={nav_dropdown} alt="" />
      <ul ref={menuRef} className="nav-menu">
        <li onClick={()=>{setMenu("Home")}}><Link to='/'>Home</Link>{menu==="Home"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Profile")}}><Link to='/Profile'>Profile</Link>{menu==="Profile"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Activity")}}><Link to="/Activity">Activity</Link>{menu==="Activity"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Progress")}}><Link to='/Progress'>Progress</Link>{menu==="Progress"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Community")}}><Link to='/Community'>Community</Link>{menu==="Community"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Games")}}><Link to='/Games'>Games</Link>{menu==="Games"?<hr/>:<></>}</li>
        <li onClick={()=>{setMenu("Therapy")}}><Link to='/Therapy'>Therapy</Link>{menu==="Therapy"?<hr/>:<></>}</li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link>
      </div>
    </div>
  )
}

export default Navbar
