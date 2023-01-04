import React from 'react';
import '../about/About.css';
import Usingteams from '../../assets/usingteams.jpg';
import Aboutimg from '../../assets/aboutimg.jpg';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className='about'>
        <h1>ABOUT ESA</h1>

        <div className='about__container'>
            <div className='about__left'>
                <h2>Elite Skills Arena</h2>
                <p>At ESA we provide an innovative range of training arenas designed to improve sports performance. Our main focus is football and we work with everyone from major professional clubs and academies, to training centres, facilities and large companies for activations.<br/> <br/>Essentially, using our arenas, players get more touches of the ball in less time, accelerating their development in core attributes. To date our products have been used over 850,000 times worldwide, across 6 continents.​ All ESA products utilise state-of-the-art LED light and vibration technology and are based around the mantra of repetition.</p>
            </div>

            <div className='about__right'>
                <img src={Aboutimg} alt="" className='about__right-img'/>
            </div>
        </div>
    </div>
  )
}

export default About