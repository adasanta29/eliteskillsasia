import React from 'react';
import '../footer/Footer.css';

const footer = () => {
  return (
    <div className='footer'>
        <div className='footer__container'>
            <div className='footer__row'>

                {/* Nav */}
                <div className='footer__column'>
                    <h4>ESA Hong Kong</h4>
                    <ul className='nav__list'> 
                        <li><a href="/">Home</a></li>
                        <li><a href="/machines">Machines</a></li>
                        <li><a href="/coaches">About</a></li>
                        <li><a href="/data">Data Analysis</a></li>
                        <li><a href="/fhiit">F-HIIT</a></li>
                        <li><a href="/contact">Contact</a></li>
                        <li><a href="/book">Book</a></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div className='footer__column'>
                    <ul className='contact__list'>
                        <li>+852 5662 4147</li>
                        <li>11th Floor, Prince Industrial Building, 5 Sun Yip Street, Chai Wan</li>
                        <li>info@eliteskillsarenaeastasia.com</li>
                    </ul>
                </div>

            </div>
            <hr/>
            <div className='row'>
                <p className='column__small'>
                    &copy; 2022 Elite Skills Arena Hong Kong | All rights reserved | Terms of Service | Privacy
                </p>
            </div>
        </div>
    </div>
  )
}

export default footer