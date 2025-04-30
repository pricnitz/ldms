import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import '../css/navbar.css';
import logo from '../assets/logos/LDMnagamentlogo.white.svg';

export default function Navbar() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <div>
      <nav className='navbar container'>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>

        <div className='navlinks desktop-only'>
          <ul>
            <li><NavLink to="/" className={({ isActive }) => isActive ? 'navlink active-link' : 'navlink'}>Home</NavLink></li>
            <li><NavLink to="/about" className={({ isActive }) => isActive ? 'navlink active-link' : 'navlink'}>About</NavLink></li>
            <li><NavLink to="/services" className={({ isActive }) => isActive ? 'navlink active-link' : 'navlink'}>Service</NavLink></li>
            <li><NavLink to="/pages" className={({ isActive }) => isActive ? 'navlink active-link' : 'navlink'}>Pages</NavLink></li>
            <li><NavLink to="/contact-us" className={({ isActive }) => isActive ? 'navlink active-link' : 'navlink'}>Contact-us</NavLink></li>
          </ul>
        </div>

        <button className={`togglebtn ${isMobileNavOpen ? 'active' : ''}`} onClick={toggleMobileNav}>
          <div className='togglebtn1'></div>
          <div className='togglebtn2'></div>
          <div className='togglebtn3'></div>
        </button>

        <div className='navcontact desktop-only'>
          <a href="tel:+1 (333) 000-0000">+1 (333) 000-0000</a>
          <div className='getstartedbtn'><h5>GET STARTED</h5></div>
        </div>
      </nav>

      <aside className={`mobile-nav ${isMobileNavOpen ? 'active' : ''}`}>
        <ul className="mobile-links">
          <li><NavLink to="/" onClick={closeMobileNav} className={({ isActive }) => isActive ? 'navlink active-link' : 'navlink'}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={closeMobileNav} className={({ isActive }) => isActive ? 'navlink active-link' : 'navlink'}>About</NavLink></li>
          <li><NavLink to="/services" onClick={closeMobileNav} className={({ isActive }) => isActive ? 'navlink active-link' : 'navlink'}>Service</NavLink></li>
          <li><NavLink to="/pages" onClick={closeMobileNav} className={({ isActive }) => isActive ? 'navlink active-link' : 'navlink'}>Pages</NavLink></li>
          <li><NavLink to="/contact-us" onClick={closeMobileNav} className={({ isActive }) => isActive ? 'navlink active-link' : 'navlink'}>Contact-us</NavLink></li>
        </ul>
        <div className='navcontact mobile-contact'>
          <a href="tel:+1 (333) 000-0000">+1 (333) 000-0000</a>
          <div className='getstartedbtn'><h5>GET STARTED</h5></div>
        </div>
      </aside>
    </div>
  );
}
