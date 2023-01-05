import React from 'react';
import '../Book/Book.css';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import AdminPage from './AdminPage';

function AdminIndex({allTimes}) {
    return (
        <div className='book'>
            <Navbar/>
            <AdminPage allTimes={allTimes} />
            <div className='book__footer'>
            <Footer/>
            </div>
        </div>
      )
}

export default AdminIndex;