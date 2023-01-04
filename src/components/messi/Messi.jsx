import React from 'react';
import '../messi/Messi.css';
import Leo from '../../assets/messi-img.jpg';
import { motion } from 'framer-motion';

const Messi = () => {
  return (
    <div className='messi'>

        <div className='messi__container'>

            <div className='messi__title'>
                <h1>Want to train like the pros?</h1>
            </div>

            <div className='messi__content'>
                <img src={Leo} alt="" />

                <div className='messi__content-right'>
                    <p>The best in the world use ESA, <br/>and so can you...</p>
                    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
                        <a href="/book">Book Now</a>
                    </motion.button>
                    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
                        <a href="/contact">Contact Us</a>
                    </motion.button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Messi