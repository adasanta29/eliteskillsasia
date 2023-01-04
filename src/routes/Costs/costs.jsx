import React from 'react';
import '../Costs/costs.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import Cost from '../../components/cost/Cost';

const costs = () => {
  return (
    <div className='costs'>
        <Navbar/>
        <h1>Costs</h1>
        <Cost/>
        <Footer/>
    </div>
  )
}

export default costs