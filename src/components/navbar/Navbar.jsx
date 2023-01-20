import React, { useState } from 'react'
import './Navbar.css'
import esalogo from '../../assets/logo.jpg';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {RxHamburgerMenu} from 'react-icons/rx';
import {RxCross2} from 'react-icons/rx';
import { useRef } from 'react';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Navbar = () => {

    const { t } = useTranslation();
    
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
                <li><a href="/">{t("navbar_home")}</a></li>
                <li><a href="/machines">{t("navbar_machines")}</a></li>
                <li><a href="/coaches">{t("navbar_about")}</a></li>
                <li><a href="/data">{t("navbar_data")}</a></li>
                <li><a href="/fhiit">F-HIIT</a></li>
                <li><a href="/contact">{t("navbar_contact")}</a></li>
                <li><a href="/book">{t("navbar_book")}</a></li>
            </ul>
        </div>

        <div className='toggle__button' onClick={() => setIsMobile(!isMobile)}>
                {!isMobile ? ( <RxHamburgerMenu className='open' /> ) : ( <RxCross2 className='close'/> )}
        </div>
    </div>
  )
}

export default Navbar