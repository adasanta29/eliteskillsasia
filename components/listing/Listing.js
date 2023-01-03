import React from 'react';
import '../listing/Listing.css';
import { motion } from 'framer-motion';

const Listing = ({ data, open }) => {
    const {image, title} = data;

  return (
    <motion.div className='listing' onClick={open} whileHover={{scale: 1.1}}>
        <div className='listing__content'>
            <div className='listing__image-container'>
                <img src={image} className='listing__image' alt='machine image'/>
            </div>
            <div className='listing__details'>
                <div className='listing__row'>
                    <span className='listing__title'>{title}</span>
                </div>
            </div>
        </div>
    </motion.div>
  )
}

export default Listing;