import React from 'react';
import '../hiitcontent/Hiitcontent.css';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Hiitcontent = () => {
    const { t } = useTranslation();

  return (
    <div className='hiitcontent'>

        <div className='hiitcontent__container'>

            <div className='content__box'>
                <h3>{t("hiitcontent_one_h3")}</h3>
                <p>{t("hiitcontent_one_p")}</p>
            </div>

            <div className='content__box'>
                <h3>{t("hiitcontent_two_h3")}</h3>
                <p>{t("hiitcontent_two_p")}</p>
            </div>

            <div className='content__box'>
                <h3>{t("hiitcontent_three_h3")} 7:30pm - 8:30pm</h3>
                <p>{t("hiitcontent_three_p")}</p>
            </div>
        </div>

        <div className='hiit__button'>
            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
                <a href="/book">{t("hiitcontent_cta")}</a>
            </motion.button>
        </div>
    </div>
  )
}

export default Hiitcontent