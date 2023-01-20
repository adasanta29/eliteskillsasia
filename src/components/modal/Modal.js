import React from 'react';
import '../modal/Modal.css';
import {IoIosCloseCircleOutline} from 'react-icons/io';
import { motion } from 'framer-motion';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Modal = ({data, close}) => {
    const {image, title, description, info} = data;

    const modalVariants = { open: {opacity: 1, transition: {staggerChildren: 0.5, delayChildren: 0.2}}, closed: {opacity: 0}};

    const imageVariants = {open: {opacity: 1, y: "0vh"}, closed: {opacity: 0, y: "-10vh"}};

    const modalInfoVariants = {open: {opacity: 1, transition: {staggeredChildren: 0.2}}, closed: {opacity: 0}};

    const modalRowVariants = {open: {opacity: 1, x: 0}, closed: {opacity: 0, x: "10%"}};

    const { t } = useTranslation();


  return (
    <motion.div className='modal' onClick={(e) => e.stopPropagation()} variants={modalVariants}>
        <motion.img className='modal__image' alt='machine image' src={image} variants={imageVariants}/>
        <motion.div className='modal__info' variants={modalInfoVariants}>
            <motion.div className='modal__row' variants={modalRowVariants}>
                <span className='modal__title'>{title}</span>
            </motion.div>
            <motion.div className='modal__row' variants={modalRowVariants}>
                <span className='modal__description'>{description}</span>
            </motion.div>
            <motion.div className='modal__row' variants={modalRowVariants}>
                <span className='modal__technique'>{info}</span>
            </motion.div>
            <motion.button className='modal__row machine__btn' onClick={close} whileHover={{scale: 1.2}}>
                {t("teamclosebtn")}
            </motion.button>
        </motion.div>
    </motion.div>
  )
}

export default Modal;