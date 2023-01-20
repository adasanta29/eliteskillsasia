import React from 'react';
import '../Contact/contact.css';
import Navbar from '../../components/navbar/Navbar';
import ContactUs from '../../components/contactus/ContactUs';
// import Transport from '../../components/transport/Transport';
import Footer from '../../components/footer/Footer';
import mapimg from '../../assets/mapimg.jpg';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className='contact'>
        <Navbar/>
        <h1>{t("contacth1")}</h1>
        <ContactUs/>
        <h1>{t("locationh1")}</h1>
        <div className='map__container'>
          <img src={mapimg} alt="" className='mapimg'/>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact;