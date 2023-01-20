import React from 'react';
import '../about/About.css';
import Usingteams from '../../assets/usingteams.jpg';
import Aboutimg from '../../assets/aboutimg.jpg';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const About = () => {

  const { t } = useTranslation();

  return (
    <div className='about'>
        <h1>{t("abouth1")}</h1>

        <div className='about__container'>
            <div className='about__left'>
                <h2>{t("aboutlefth2")}</h2>
                <p>{t("aboutleftp1")}<br/> <br/>{t("aboutleftp2")}</p>
            </div>

            <div className='about__right'>
                <img src={Aboutimg} alt="" className='about__right-img'/>
            </div>
        </div>
    </div>
  )
}

export default About