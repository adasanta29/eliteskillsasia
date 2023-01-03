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

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <div className='wrapper'>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/book' element={<Book/>}/>
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


