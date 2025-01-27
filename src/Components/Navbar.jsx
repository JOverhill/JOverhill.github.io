import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className='header'>
        <Link to="/" className='logo'> Jiri Ylimäki</Link>

        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/about">About me</Link>
            <Link to="/portfolio">Portfolio</Link>
        </nav>
    </header>
  )
}

export default Navbar