import React from 'react';
import '../Book/Book.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
// import { motion } from 'framer-motion';

const Book = () => {
  return (
    <div className='book'>
        <Navbar/>
        <div className='book__footer'>
        <Footer/>
        </div>
    </div>
  )
}

export default Book