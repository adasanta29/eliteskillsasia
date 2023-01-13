import React from 'react';
import './Hero.css';
import heroimg1 from '../../assets/heroimg1.jpg';
import heroimg2 from '../../assets/heroimg2.jpg';
import heroimg3 from '../../assets/heroimg3.jpg';
import Heroright from "../../components/heroright/Heroright";
import bgimg from "../../assets/herobgimg.jpg";
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <div className='hero'>

      <div className='bgimg'></div>

      <div className='hero__box'>
        <h1>Now Officially Open</h1>
        <p>Welcome to the <b className='red__tag'>FIRST</b> modern football gym in <b className='red__tag'>Hong Kong</b>. ESA Hong Kong brings innovative training equipment used by top professionals to help develop your football technical skills to the next level.</p>
        
        <div className='cta__container'>

          <div className='cta__container-top'>
            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
              <a href="/book">Book Session</a>
            </motion.button>

            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
              <a href="/machines">See Our Equipment</a>
            </motion.button>
          </div>

          <div className="cta__container-bottom">
            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
              <a href="/contact">Birthday or Event Booking Inquiries</a>
            </motion.button>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default Hero