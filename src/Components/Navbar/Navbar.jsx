import React from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'

const Navbar = () => {
    return (
        <nav className='container'>
            <img src={logo}/>
            <ul>
                <li>Home</li>
                <li>Programs</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact</button></li>
            </ul>
        </nav>
    )
}

export default Navbar
