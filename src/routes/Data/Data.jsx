import React from 'react';
import '../Data/Data.css';
import Navbar from '../../components/navbar/Navbar';
import Datahub from '../../components/datahub/Datahub';
import Footer from '../../components/footer/Footer';
import Youtube from '../../components/youtube/Youtube';

const Data = () => {
  return (
    <div className='data'>
        <Navbar/>
        <h1>DATA ANALYSIS</h1>
        <Datahub/>
        <h3>Watch our tutorial video for help installing the DataHub</h3>
        <Youtube/>
        <Footer/>
    </div>
  )
}

export default Data