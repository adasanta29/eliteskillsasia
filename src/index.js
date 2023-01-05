import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Book from './routes/Book/Book';
import Machines from './routes/Machines/Machines';
import Coaches from './routes/Coaches/Coaches';
import Data from './routes/Data/Data';
import Fhiit from './routes/Fhiit/Fhiit';
import Contact from './routes/Contact/contact';
import Costs from './routes/Costs/costs';
import AdminIndex from './routes/admin';

const allTimes = [
  // { text: '12:00 AM', value: 0, dbTime:'00:00:00' },
  // { text: '1:30 AM', value: 1.5 , dbTime:'01:30:00'},
  // { text: '3:00 AM', value: 3 , dbTime:'03:00:00'},
  // { text: '4:30 AM', value: 4.5 , dbTime:'04:30:00'},
  // { text: '6:00 AM', value: 6 , dbTime:'06:00:00'},
  // { text: '7:30 AM', value: 7.5 , dbTime:'07:30:00'},
  { text: '9:00 AM', value: 9 , dbTime:'09:00:00'},
  { text: '10:30 AM', value: 10.5 , dbTime:'10:30:00'},
  { text: '12:00 PM', value: 12 , dbTime:'12:00:00'},
  { text: '1:30 PM', value: 13.5 , dbTime:'13:30:00'},
  { text: '3:00 PM', value: 15 , dbTime:'15:00:00'},
  { text: '4:30 PM', value: 16.5 , dbTime:'16:30:00'},
  { text: '6:00 PM', value: 18 , dbTime:'18:00:00'},
  { text: '7:30 PM', value: 19.5 , dbTime:'19:30:00'},
  { text: '9:00 PM', value: 21 , dbTime:'21:00:00'},
  // { text: '10:30 PM', value: 22.5 , dbTime:'22:30:00'},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <div className='wrapper'>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/book' element={<Book allTimes={allTimes} />}/>
      <Route path='/admin' element={<AdminIndex allTimes={allTimes} />}/>
      <Route path='/machines' element={<Machines/>}/>
      <Route path='/coaches' element={<Coaches/>}/>
      <Route path='/data' element={<Data/>}/>
      <Route path='/fhiit' element={<Fhiit/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/costs' element={<Costs/>}/>
    </Routes>
  </div>
  </BrowserRouter>
);


