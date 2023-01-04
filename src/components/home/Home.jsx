import React from 'react';
import '../home/Home.css';
import teamsimg from '../../assets/usingteams.jpg';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <div className='home'>

        <div className='using__teams-container'>

            <div className='using__teams-left'>
                <h1>We're leading a revolution in football training</h1>
                <p className='using__teams-left-p'>Used and trusted by many of football's leading clubs, ESA's advanced training equipment is built around the philosophy of deliberate practice and intense repetition combined with expert feedback.</p>
                <p>Our mission is to empower players, delivering meaningful results in technical development, tactical awareness, and rehabilitation programmes.</p>
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
                  <a href="/coaches">Learn More</a>
                </motion.button>
            </div>

            <div className='using__teams-right'>
                <img src={teamsimg} alt="" className='teamsimg'/>
            </div>
        </div>
    </div>
  )
}

export default Home