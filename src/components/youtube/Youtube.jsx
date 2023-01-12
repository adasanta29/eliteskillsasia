import React from 'react';
import ReactPlayer from 'react-player';
import '../youtube/Youtube.css';

const Youtube = () => {
  return (
    <div className='video'>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=PWfj8-JiNnc"
      />
    </div>
  );
}

export default Youtube;