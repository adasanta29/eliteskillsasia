import React from 'react';
import '../cost/Cost.css';
import { motion } from 'framer-motion';

const Cost = () => {
  return (
    <div className='cost'>
        <div className='cost__container'>
            <div className='cost__grid'>

                <div className='cost__class'>
                    <h3>Private Coaching per Hour</h3>
                    <p>inclusive of ESA Data Hub</p>
                    <div className='class__details-one class__container'>
                        <h4 className='type'>Single Session</h4>
                        <h4 className='price'>1000 HKD</h4>
                    </div>
                    <div className='class__details-two class__container'>
                        <h4>Pack of 5 Sessions</h4>
                        <h4>4500 HKD</h4>
                    </div>
                    <p>2 Semi-Private Credits can be transferred into 1 Private Session Credit</p>
                </div>

                <div className='cost__class'>
                    <h3>Semi-Private Coaching per 1.5 Hours</h3>
                    <p>inclusive of ESA Data Hub</p>
                    <div className='class__details-one class__container'>
                        <h4>Single Session</h4>
                        <h4>500 HKD</h4>
                    </div>
                    <div className='class__details-two class__container'>
                        <h4>Pack of 10 Sessions</h4>
                        <h4>4500 HKD</h4>
                    </div>
                    <p>Up to 8 per session <br/> Maximum 4-1 ratio of coach-player</p>
                </div>

                <div className='cost__class'>
                    <h3>F-HIIT (Football High Intensity Interval Training)</h3>
                    <p>Tuesday Weekly from 7:30pm - 8:30pm</p>
                    <div className='class__details-one class__container'>
                        <h4>Single Session</h4>
                        <h4>300 HKD</h4>
                    </div>
                    <div className='class__details-two class__container'>
                        <h4>Pack of 5 Sessions</h4>
                        <h4>1125 HKD</h4>
                    </div>
                    <p>For more information: <a href="/fhiit">www.esahongkong.com/fhiit</a></p>
                </div>

                <div className='cost__class'>
                    <h3>Centre Rental</h3>
                    <p>Non-inclusive of Coaching and ESA Data Hub</p>
                    <div className='class__details-one class__container'>
                        <h4>1 Hour Booking</h4>
                        <h4>1750 HKD/hour</h4>
                    </div>
                    <div className='class__details-two class__container'>
                        <h4>2 Hour Booking</h4>
                        <h4>1600 HKD/hour</h4>
                    </div>
                    <div className='class__container'>
                        <h4>3+ Hour Booking</h4>
                        <h4>1500 HKD/hour</h4>
                    </div>
                    <p>Up to 12 players in the Centre</p>
                </div>

                <div className='cost__class'>
                    <h3>Supplemental Coaching</h3>
                    <p>For Private Venue Bookings</p>
                    <div className='class__details-one class__container'>
                        <h4>Coach</h4>
                        <h4>500 HKD/hour</h4>
                    </div>
                    <div className='class__details-two class__container'>
                        <h4>Assistant Coach</h4>
                        <h4>250 HKD/hour</h4>
                    </div>
                    <p>An Assistant Coach is recommended for more than 6 players</p>
                </div>

                <div className='cost__class'>
                    <h3>Birthday/Event Booking</h3>
                    <div className='class__details-one class__container'>
                        <h4>Please contact us with details</h4>
                        <h4>Varied by Request</h4>
                    </div>
                </div>

            </div>
        </div>

                <div className='cost__cta-container'>
                    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
                        <a href="/book">Book a Session</a>
                    </motion.button>
                </div>
    </div>
  )
}

export default Cost