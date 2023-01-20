import React from 'react';
import './Hero.css';
import heroimg1 from '../../assets/heroimg1.jpg';
import heroimg2 from '../../assets/heroimg2.jpg';
import heroimg3 from '../../assets/heroimg3.jpg';
import Heroright from "../../components/heroright/Heroright";
import bgimg from "../../assets/herobgimg.jpg";
import { motion } from 'framer-motion';

import { useTranslation, Trans } from 'react-i18next';
import '../../locales/i18n.js';

const Hero = () => {

  const { t } = useTranslation();

  return (
    <div className='hero'>

      <div className='bgimg'></div>

      <div className='hero__box'>
        <h1>{t("heroboxh1")}</h1>
        <p>{t("herowelcome")} <b className='red__tag'>{t("herofirst")}</b> {t("heromoderngym")} <b className='red__tag'>{t("herohk")}</b> {t("hero_rest")}</p>
        
        <div className='cta__container'>

          <div className='cta__container-top'>
            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
              <a href="/book">{t("heroctabook")}</a>
            </motion.button>

            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
              <a href="/machines">{t("heroctaequipment")}</a>
            </motion.button>
          </div>

          <div className="cta__container-bottom">
            <motion.button whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="cta">
              <a href="/contact">{t("heroctaevent")}</a>
            </motion.button>
          </div>
          
        </div>

      </div>

    </div>
  )
}

export default Hero