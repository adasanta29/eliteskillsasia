import React from 'react';
import '../Data/Data.css';
import Navbar from '../../components/navbar/Navbar';
import Datahub from '../../components/datahub/Datahub';
import Datapdf from '../../components/datapdf/Datapdf';
import Footer from '../../components/footer/Footer';

const Data = () => {
  return (
    <div className='data'>
        <Navbar/>
        <h1>DATA ANALYSIS</h1>
        <Datahub/>
        <Datapdf/>
        <Footer/>
    </div>
  )
}

export default Data