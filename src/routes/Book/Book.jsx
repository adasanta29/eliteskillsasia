import React from 'react';
import '../Book/Book.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import VisitorsPage from '../../components/bookings/VisitorsPage'
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Book = ({allTimes}) => {
  const { t } = useTranslation();

  return (
    <div className='book'>
        <Navbar/>

        <div className='book__cta-container'>
          <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
            <a href="/costs">{t("book_cta")}</a>
          </motion.button>
        </div>
        

        <VisitorsPage allTimes={allTimes} />
        <div className='book__footer'>
        <Footer/>
        </div>
    </div>
  )
}

export default Book