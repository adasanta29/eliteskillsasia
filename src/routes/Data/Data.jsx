import React from 'react';
import '../Data/Data.css';
import Navbar from '../../components/navbar/Navbar';
import Datahub from '../../components/datahub/Datahub';
import Footer from '../../components/footer/Footer';
import Youtube from '../../components/youtube/Youtube';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Data = () => {
  const { t } = useTranslation();

  return (
    <div className='data'>
        <Navbar/>
        <h1>{t("datah1")}</h1>
        <Datahub/>
        <h3>{t("data_video_h3")}</h3>
        <Youtube/>
        <Footer/>
    </div>
  )
}

export default Data