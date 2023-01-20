import React from 'react';
import '../Costs/costs.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Cost from '../../components/cost/Cost';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Costs = () => {

  const { t } = useTranslation();

  return (
    <div className='costs'>
        <Navbar/>
        <h1>{t("costsh1")}</h1>
        <Cost/>
        <Footer/>
    </div>
  )
}

export default Costs