import React from 'react';
import '../Coaches/Coaches.css';
import Navbar from '../../components/navbar/Navbar';
import Team from '../../components/team/Team';
import About from '../../components/about/About';
import Footer from '../../components/footer/Footer';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Coaches = () => {

  const { t } = useTranslation();

  return (
    <div className='coaches'>
        <Navbar/>
        <About/>
        <h1>{t("coachesh1")}</h1>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Coaches;