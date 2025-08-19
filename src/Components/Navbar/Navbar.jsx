import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo from '../../assets/Logo.png'

const Navbar = () => {

    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setSticky(window.scrollY > 200);
        })
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-navbar' : ''}`}>
            <img src={logo} />
            <ul>
                <li>Home</li>
                <li>Programs</li>
                <li>About us</li>
                <li>Campus</li>
                <li>Testimonials</li>
                <li><button className='btn'>Contact</button></li>
            </ul>
        </nav >
    )
}

export default Navbar
