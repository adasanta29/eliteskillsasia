import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import '../Fhiit/Fhiit.css';
import Hiitvideo from '../../components/hiitvideo/Hiitvideo';
import Footer from '../../components/footer/Footer';
import Hiitcontent from '../../components/hiitcontent/Hiitcontent';

const Fhiit = () => {
  return (
    <div className='fhiit'>
        <Navbar/>
        <h1>F-HIIT</h1>
        <Hiitvideo/>
        <Hiitcontent/>
        <Footer/>
    </div>
  )
}

export default Fhiit