import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='navbar' >
        <Link className='nav' to={"/home"}>Home</Link>
        <Link className='nav'to={"/about"} >About</Link>
        <Link className='nav'to={"/contact"} >Contact</Link>
        <Link className='nav'to={"/blog"} >Blog</Link>
      
    </div>
  )
}

export default Navbar