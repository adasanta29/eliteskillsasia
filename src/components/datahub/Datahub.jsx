import React from 'react';
import '../datahub/Datahub.css';
import { motion } from 'framer-motion';
import data1 from '../../assets/data1.jpg';
import data2 from '../../assets/data2.jpg';
import data3 from '../../assets/data3.jpg';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Datahub = () => {
    const { t } = useTranslation();
  return (
    <div className='datahub'>

        <div className='data__container'>
            <img src={data1} alt="Data1" className='data__image'/>

            <div className='content'>
                <h2>{t("data_one_h2")}</h2>
                <p>{t("data_one_p")} </p>
            </div>
        </div>

        <div className='data__container'>
            <img src={data2} alt="Data2" className='data__image'/>

            <div className='content'>
                <h2>{t("data_two_h2")}</h2>
                <p>{t("data_two_p")}</p>
            </div>
        </div>

        <div className='data__container'>
            <img src={data3} alt="Data3" className='data__image'/>

            <div className='content'>
                <h2>{t("data_three_h2")}</h2>
                <p>{t("data_three_p")}</p>
            </div>
        </div>

    </div>
  )
}

export default Datahub