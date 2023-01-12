import React from 'react';
import '../team/Team.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Team_Modal from '../team-modal/Team_Modal';
import Santi from '../../assets/santijpg.jpg';
import Trayfs from '../../assets/trayfs.jpg';

const Team = () => {

  const [modalOpen_1, setModalOpen_1] = useState(false);
  const [modalOpen_2, setModalOpen_2] = useState(false);
  const [modalOpen_3, setModalOpen_3] = useState(false);
  const [modalOpen_4, setModalOpen_4] = useState(false);
  const [modalOpen_5, setModalOpen_5] = useState(false);
  const [modalOpen_6, setModalOpen_6] = useState(false);

  const content_1 = (
    <div className='modal__content'>
      <h2>Sam Trayford - General Director</h2>
      <p>Sam has been in and out of Hong Kong his whole life having been born in the city. He has had a huge passion for football from a young age playing in both Hong Kong and the UK. This passion is what led him to be involved with Elite Skills Arena (ESA) UK. He returned to Hong Kong in 2017 bringing the ESA brand and the products that come with it. He helped expand the brand across East Asia in regions such as China, Thailand and Japan. Having identified the quality of training and enjoyment participants get from the use of ESA products he decided a permanent location was needed, and so the ESA Hong Kong Training Centre was born!</p>
    </div>
  );

  const content_2 = (
    <div className='modal__content'>
      <h2>Chris de Laiglesia - Technical Director</h2>
      <p>Chris has been coaching in Hong Kong since 2015 working with players of all ages, from 2 year olds learning the basics up to adults in the Hong Kong professional league. Having been introduced to the private coaching sector over the course of the lockdown in Hong Kong, he found that this particular area was not catering to the needs of the players and wanted to provide a more immersive experience. Chris has had playing experience with pro team Kitchee (Hong Kong) and semi-pro team Ventura County (California, US). He found himself wanting to continue being involved in football and coached the Johns Hopkins University Club Soccer team as a volunteer in 2011-2012. With a FA level 1 completed in 2004, he knew he needed to further his football education, so he enrolled with the IFA (Northern Irish Football Association) UEFA B course in 2016 - 2017 and as of June 2021 is currently on the FAW (Football Association of Wales) as he looks to continue through the UEFA coaching tiers.</p>
    </div>
  );

  const content_3 = (
    <div className='modal__content'>
      <h2>Santiago Fung - Head of Operations</h2>
      <p>Born and raised in Hong Kong, Santiago has always enjoyed building relationships with people from different cultures. Nothing brings more joy to Santi than seeing people around him succeed, which is why he developed deep love for football at a young age. As a natural team player, Santi is not afraid to do the dirty work for the betterment of the team. Football has opened many doors for Santi, and he continues to be deep rooted in the local sports community. With his background in Sports Business Management, along with his passion for team spirit building, Santi is ready to create the best football experience Hong Kong has to offer!</p>
    </div>
  );

  const content_4 = (
    <div className='modal__content'>
      <h2>Nikhil Narwani - Coach</h2>
      <p>Nikhil is a Qualified FA Licensed Football Coach, currently working as a free-lance coach focusing on 1 on 1 training to help individuals reach their highest potential. Coach Nik has been coaching for about 8 years now and has also worked with and managed various different companies such as ESF (English Schools Foundation), RMFC (Real Madrid Foundation Clinic), APSS (Asia Pacific Soccer Schools) and BTS (Brasil Top Skills). Nik started loving the sport when he was 2/3 years old and pursued full time coaching in 2016 when he had a life changing injury and tore his ACL & MCL. Coach Nik has played at the highest level around Hong Kong representing the Hong Kong National Team U21’s while playing for U18 Sun Pegasus and Sun Pegasus Reserve team in 2015. Coach Nik has gained vast experience in the field of football having been coached at a high level and looks to provide the same level of coaching to his own players.</p>
    </div>
  );

  const content_5 = (
    <div className='modal__content'>
      <h2>Jack Shum - Coach</h2>
      <p>Jack is a HKFA D License coach whose main focus has been on youth development. He has worked with various organizations including the Island district team, Arsenal HK and the Island School as well as Asia Pacific Soccer Schools and the Kowloon Cricket Club youth football section over the past 7 years. He has previously played for South China AA as a youth player in the early 2000s, and looks to try and bring out his knowledge from his various experiences to provide the best football education for all. At ESA HK, Jack can also coach Cantonese to better communicate to some of the more local players attending the centre.</p>
    </div>
  );

  const content_6 = (
    <div className='modal__content'>
      <h2>Kafi Harun - Coach</h2>
      <p>Kafi is a FAW Level 1 coach who specialises in 1-on-1 training. He has worked with various groups including Young Talent and Island School over the last 3 years  and is currently playing with the KCC Dragons in the Yau Yee League first division. He has previously played for FWD (2015-2018) and Discovery Bay FC (2019-2020) where he won the Legal League 3 times, the cup on 2 occasions and crowned top goalscorer twice over the course of 5 years. Coach Kafi works voluntarily with ESAHK and HK's refugee community, providing access to quality facilities and coaching for children  who may not be able to do so otherwise. He's a coach who looks to push his players to be great, not only in football but also in life, instilling a never give up attitude to all his players!</p>
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

          <h3>Sam Trayford</h3>
          <p className='role'>General Director</p>
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

          <h3>Chris de Laiglesia</h3>
          <p className='role'>Technical Director</p>
          <p className='certifications'>UEFA B License - FAW <br/> IFA C License <br/> 8+ years of coaching in HK <br/> First Aid Certified</p>
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

          <h3>Santiago Fung</h3>
          <p className='role'>Head of Operations</p>
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

          <h3>Nikhil Narwani</h3>
          <p className='role'>Coach</p>
          <p className='certifications'>FAW Level 1 Coach <br/>6+ years of coaching experience <br/>Worked with U9-U16 Squads<br/> First Aid Certified</p>
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

          <h3>Jack Shum</h3>
          <p className='role'>Coach</p>
          <p className='certifications'>HKFA D License Coach<br/>7+ years of coaching experience<br/>Worked with U7-U13 Squads<br/>First Aid Certified</p>
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
          
          <h3>Kafi Harun</h3>
          <p className='role'>Coach</p>
          <p className='certifications'>FAW Level 1 Coach<br/>3+ years of coaching experience<br/>Worked with U4-U9 Squads<br/>First Aid Certified</p>
        </div>

      </div>
    </div>
  )
}

export default Team;