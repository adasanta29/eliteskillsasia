import React from 'react';
import '../messi/Messi.css';
import Leo from '../../assets/messi-img.jpg';
import { motion } from 'framer-motion';

import { useTranslation, Trans } from 'react-i18next';
import '../../locales/i18n';

const Messi = () => {

    const { t } = useTranslation();

  return (
    <div className='messi'>

        <div className='messi__container'>

            <div className='messi__title'>
                <h1>{t("messititle")}</h1>
            </div>

            <div className='messi__content'>
                <img src={Leo} alt="" />

                <div className='messi__content-right'>
                    <p>{t("messirightp1")} <br/>{t("messirightp2")}</p>
                    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
                        <a href="/book">{t("messibook")}</a>
                    </motion.button>
                    <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
                        <a href="/contact">{t("messicontact")}</a>
                    </motion.button>
                </div>
            </div>

        </div>

    </div>
  )
}

export default Messi