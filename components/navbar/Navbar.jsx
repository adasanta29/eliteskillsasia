import React, { useState } from 'react'
import './Navbar.css'
import esalogo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {RxHamburgerMenu} from 'react-icons/rx';
import {RxCross2} from 'react-icons/rx';
import { useRef } from 'react';

const Navbar = () => {
    
    const linkStyle = {
        textDecoration: "none",
        color: 'white',
    }

    const [isMobile, setIsMobile] = useState(false);

  return (
    <div className='navbar'>
        <div className="navbar__container">

            <div className="logo">
                <Link to='/'>
                    <img src={esalogo} alt="" />
                </Link>
            </div>

            <ul className={!isMobile ? "hide" : "block"} onClick={() => setIsMobile(false)}>
                <li><a href="/">Home</a></li>
                <li><a href="/machines">Machines</a></li>
                <li><a href="/coaches">About</a></li>
                <li><a href="/data">Data Analysis</a></li>
                <li><a href="/fhiit">F-HIIT</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/book">Book</a></li>
            </ul>
        </div>

        <div className='toggle__button' onClick={() => setIsMobile(!isMobile)}>
                {!isMobile ? ( <RxHamburgerMenu className='open' /> ) : ( <RxCross2 className='close'/> )}
        </div>
    </div>
  )
}

export default Navbar