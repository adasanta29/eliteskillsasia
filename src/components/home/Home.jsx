import React from 'react';
import '../home/Home.css';
import teamsimg from '../../assets/usingteams.jpg';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Home = () => {
  const { t } = useTranslation();

  return (
    <div className='home'>

        <div className='using__teams-container'>

            <div className='using__teams-left'>
                <h1>{t("homelefth1")}</h1>
                <p className='using__teams-left-p'>{t("homeleftp1")}</p>
                <p>{t("homeleftp2")}</p>
                <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
                  <a href="/coaches">{t("homecta")}</a>
                </motion.button>
            </div>

            <div className='using__teams-right'>
                <img src={teamsimg} alt="" className='teamsimg'/>
            </div>
        </div>
    </div>
  )
}

export default Home