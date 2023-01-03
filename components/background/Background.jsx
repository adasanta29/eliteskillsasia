import React from 'react';
import './Background.css';
import bgimg from '../../assets/bgimg.jpg';

const Background = () => {
  return (
    <div className='bg-image'>
      <img src={bgimg} alt="" />
    </div>
  )
}

export default Background