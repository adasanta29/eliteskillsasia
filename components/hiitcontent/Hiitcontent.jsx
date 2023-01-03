import React from 'react';
import '../hiitcontent/Hiitcontent.css';
import { motion } from 'framer-motion';

const Hiitcontent = () => {
  return (
    <div className='hiitcontent'>

        <div className='hiitcontent__container'>

            <div className='content__box'>
                <h3>Football High Intensity Interval Training</h3>
                <p>Increase endurance, co-ordination, strength and stamina</p>
            </div>

            <div className='content__box'>
                <h3>8-10 different stations!</h3>
                <p>50% body weight / 50% ESA machine training</p>
            </div>

            <div className='content__box'>
                <h3>Every Tuesdays 7:30pm - 8:30pm</h3>
                <p>Sign up for a trial today!</p>
            </div>
        </div>

        <div className='hiit__button'>
            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
                <a href="/book">Book</a>
            </motion.button>
        </div>
    </div>
  )
}

export default Hiitcontent