import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import '../Machines/Machines.css'
import Machineinput from '../../components/machineinput/Machineinput';
import Footer from '../../components/footer/Footer';

const Machines = () => {
  return (
    <div className='machines'>
        <Navbar/>
        <h1>OUR MACHINES</h1>
        <Machineinput/>
        <Footer/>
    </div>
  )
}

export default Machines