import React from 'react';
import '../datahub/Datahub.css';
import { motion } from 'framer-motion';
import data1 from '../../assets/data1.jpg';
import data2 from '../../assets/data2.jpg';
import data3 from '../../assets/data3.jpg';

const Datahub = () => {
  return (
    <div className='datahub'>

        <div className='data__container'>
            <img src={data1} alt="Data1" className='data__image'/>

            <div className='content'>
                <h2>Create Your Profile and Track Performance</h2>
                <p>All players can create their individual profile, where they can then easily get access through the official ESA Data Hub app or their standard browser. Each profile is linked to their ESA machine sign in so that any data is automatically uploaded and stored in the ESA Data Hub. </p>
            </div>
        </div>

        <div className='data__container'>
            <img src={data2} alt="Data2" className='data__image'/>

            <div className='content'>
                <h2>Analytics of Performances Over Time</h2>
                <p>The scores obtained from their sessions can be compared by date/ESA game type/ESA machine to deeply analyse their development throughout their time at the centre. The instant feedback can then be used to identify areas of strengths/weaknesses as well as condition of the players who may be recovering from injury.</p>
            </div>
        </div>

        <div className='data__container'>
            <img src={data3} alt="Data3" className='data__image'/>

            <div className='content'>
                <h2>Leaderboard to Compete Locally and Worldwide</h2>
                <p>Compare scores against friends, teammates, other players in the centre or those from different academies around the world! Using the various filtering options, players can compare by age group/nationality/ESA game type/ESA machine type (to name a few) to see how they rank!</p>
            </div>
        </div>

    </div>
  )
}

export default Datahub