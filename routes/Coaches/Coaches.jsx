import React from 'react';
import '../Coaches/Coaches.css';
import Navbar from '../../components/navbar/Navbar';
import Team from '../../components/team/Team';
import About from '../../components/about/About';
import Footer from '../../components/footer/Footer';

const Coaches = () => {
  return (
    <div className='coaches'>
        <Navbar/>
        <About/>
        <h1>MEET THE TEAM</h1>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Coaches;