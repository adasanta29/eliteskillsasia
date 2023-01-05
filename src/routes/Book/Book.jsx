import React from 'react';
import '../Book/Book.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import VisitorsPage from '../../components/bookings/VisitorsPage'
// import { motion } from 'framer-motion';



const Book = ({allTimes}) => {
  return (
    <div className='book'>
        <Navbar/>
        <VisitorsPage allTimes={allTimes} />
        <div className='book__footer'>
        <Footer/>
        </div>
    </div>
  )
}

export default Book