import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import logo from '../assets/jiri.png'

const Navbar = () => {
  return (
    <header className='header'>
        <Link to="/" className='logo'>
        <img src={logo} alt='logo' /></Link>

        <nav className='navbar'>
            <Link to="/">Home</Link>
            <Link to="/about">About me</Link>
            <Link to="/portfolio">Portfolio</Link>
            <Link to="/maplestory-korean-helper">Maplestory Korean Helper</Link>
        </nav>
    </header>
  )
}

export default Navbar