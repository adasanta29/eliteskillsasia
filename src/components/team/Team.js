import React from 'react';
import '../team/Team.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Team_Modal from '../team-modal/Team_Modal';
import Santi from '../../assets/santijpg.jpg';
import Trayfs from '../../assets/trayfs.jpg';

import { useTranslation } from 'react-i18next';
import '../../locales/i18n';

const Team = () => {

  const { t } = useTranslation();

  const [modalOpen_1, setModalOpen_1] = useState(false);
  const [modalOpen_2, setModalOpen_2] = useState(false);
  const [modalOpen_3, setModalOpen_3] = useState(false);
  const [modalOpen_4, setModalOpen_4] = useState(false);
  const [modalOpen_5, setModalOpen_5] = useState(false);
  const [modalOpen_6, setModalOpen_6] = useState(false);

  const content_1 = (
    <div className='modal__content'>
      <h2>{t("modalsamh2")}</h2>
      <p>{t("modalsamp")}</p>
    </div>
  );

  const content_2 = (
    <div className='modal__content'>
      <h2>{t("modalchrish2")}</h2>
      <p>{t("modalchrisp")}</p>
    </div>
  );

  const content_3 = (
    <div className='modal__content'>
      <h2>{t("modalsantih2")}</h2>
      <p>{t("modalsantip")}</p>
    </div>
  );

  const content_4 = (
    <div className='modal__content'>
      <h2>{t("modalnikh2")}</h2>
      <p>{t("modalnikp")}</p>
    </div>
  );

  const content_5 = (
    <div className='modal__content'>
      <h2>{t("modaljackh2")}</h2>
      <p>{t("modaljackp")}</p>
    </div>
  );

  const content_6 = (
    <div className='modal__content'>
      <h2>{t("modalkafih2")}</h2>
      <p>{t("modalkafip")}</p>
    </div>
  );

  return (
    <div className='team__container'>
      <div className='team__member-group'>
        <div className='team__members'>
          <motion.button 
            className='save-button' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen_1 ? setModalOpen_1(false) : setModalOpen_1(true))} 
          >
            <img 
              src={Trayfs}
              className='team__image' 
              alt='Sam Trayford'
              />
          </motion.button>

          <AnimatePresence initial={false}>
            {modalOpen_1 && <Team_Modal isOpen={modalOpen_1} handleClose={()=>{setModalOpen_1(false)}} text={content_1}/>}
          </AnimatePresence>

          <h3>{t("sam_h3")}</h3>
          <p className='role'>{t("sam_p")}</p>
        </div>

        <div className='team__members'>
          <motion.button 
            className='save-button' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen_2 ? setModalOpen_2(false) : setModalOpen_2(true))} 
          >
            <img 
              src='https://img1.wsimg.com/isteam/ip/b84d91b1-c2ae-42cc-8cbb-d0b7368de1b2/ChrisCleanProfileWide.jpeg/:/cr=t:0%25,l:0%25,w:100%25,h:100%25/rs=w:730,h:730,cg:true' 
              className='team__image' 
              alt='Chris de Laiglesia'
              />
          </motion.button>

          <AnimatePresence initial={false}>
            {modalOpen_2 && <Team_Modal isOpen={modalOpen_2} handleClose={()=>{setModalOpen_2(false)}} text={content_2}/>}
          </AnimatePresence>

          <h3>{t("chris_h3")}</h3>
          <p className='role'>{t("chris_p")}</p>
          <p className='certifications'>UEFA B License - FAW <br/> IFA C License <br/> {t("chris_certifications")} <br/> {t("firstaid")}</p>
        </div>

        <div className='team__members'>
          <motion.button 
            className='save-button' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen_3 ? setModalOpen_3(false) : setModalOpen_3(true))} 
          >
            <img 
              src={Santi} 
              className='team__image' 
              alt='Santiago Fung'
              />
          </motion.button>

          <AnimatePresence initial={false}>
            {modalOpen_3 && <Team_Modal isOpen={modalOpen_3} handleClose={()=>{setModalOpen_3(false)}} text={content_3}/>}
          </AnimatePresence>

          <h3>{t("santi_h3")}</h3>
          <p className='role'>{t("santi_p")}</p>
        </div>

        <div className='team__members'>
          <motion.button
            className='save-button' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen_4 ? setModalOpen_4(false) : setModalOpen_4(true))} 
          >
            <img 
              src='https://img1.wsimg.com/isteam/ip/b84d91b1-c2ae-42cc-8cbb-d0b7368de1b2/Nik%20Profile.jpeg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:730,h:730,cg:true' 
              className='team__image' 
              alt='Nikhil Narwani'
            />
          </motion.button>

          <AnimatePresence initial={false}>
            {modalOpen_4 && <Team_Modal isOpen={modalOpen_4} handleClose={()=>{setModalOpen_4(false)}} text={content_4}/>}
          </AnimatePresence>

          <h3>{t("nik_h3")}</h3>
          <p className='role'>{t("nik_p")}</p>
          <p className='certifications'>FAW Level 1 Coach <br/>{t("nik_certifications_one")} <br/>{t("nik_certifications_two")}<br/> {t("firstaid")}</p>
        </div>

        <div className='team__members'>
          <motion.button
            className='save-button' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen_5 ? setModalOpen_5(false) : setModalOpen_5(true))}  
          >
            <img src='https://img1.wsimg.com/isteam/ip/b84d91b1-c2ae-42cc-8cbb-d0b7368de1b2/IMG_20220828_124101.jpg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:730,h:730,cg:true' className='team__image' alt='Jack Shum'/>
          </motion.button>

          <AnimatePresence initial={false}>
            {modalOpen_5 && <Team_Modal isOpen={modalOpen_5} handleClose={()=>{setModalOpen_5(false)}} text={content_5}/>}
          </AnimatePresence>

          <h3>{t("jack_h3")}</h3>
          <p className='role'>{t("jack_p")}</p>
          <p className='certifications'>HKFA D License Coach<br/>{t("jack_certifications_one")}<br/>{t("jack_certifications_two")}<br/>{t("firstaid")}</p>
        </div>

        <div className='team__members'>
          <motion.button
            className='save-button' 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => (modalOpen_6 ? setModalOpen_6(false) : setModalOpen_6(true))}
          >
            <img src='https://img1.wsimg.com/isteam/ip/b84d91b1-c2ae-42cc-8cbb-d0b7368de1b2/KafiProfile%20(1).jpg/:/cr=t:12.5%25,l:0%25,w:100%25,h:75%25/rs=w:730,h:730,cg:true' className='team__image' alt='Kafi Harun'/>
          </motion.button>

          <AnimatePresence initial={false}>
            {modalOpen_6 && <Team_Modal isOpen={modalOpen_6} handleClose={()=>{setModalOpen_6(false)}} text={content_6}/>}
          </AnimatePresence>
          
          <h3>{t("kafi_h3")}</h3>
          <p className='role'>{t("kafi_p")}</p>
          <p className='certifications'>FAW Level 1 Coach<br/>{t("kafi_certifications_one")}<br/>{t("kafi_certifications_two")}<br/>{t("firstaid")}</p>
        </div>

      </div>
    </div>
  )
}

export default Team;