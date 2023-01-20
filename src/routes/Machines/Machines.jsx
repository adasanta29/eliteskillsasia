import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import '../Machines/Machines.css'
import Machineinput from '../../components/machineinput/Machineinput';
import Footer from '../../components/footer/Footer';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Machines = () => {

  const { t } = useTranslation();

  return (
    <div className='machines'>
        <Navbar/>
        <h1>{t("machineh1")}</h1>
        <Machineinput/>
        <Footer/>
    </div>
  )
}

export default Machines