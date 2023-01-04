import React from 'react';
import '../Contact/contact.css';
import Navbar from '../../components/navbar/Navbar';
import ContactUs from '../../components/contactus/ContactUs';
// import Transport from '../../components/transport/Transport';
import Footer from '../../components/footer/Footer';
import mapimg from '../../assets/mapimg.jpg';

const contact = () => {
  return (
    <div className='contact'>
        <Navbar/>
        <h1>CONTACT US</h1>
        <ContactUs/>
        <h1>OUR LOCATION</h1>
        <div className='map__container'>
          <img src={mapimg} alt="" className='mapimg'/>
        </div>
        <Footer/>
    </div>
  )
}

export default contact;