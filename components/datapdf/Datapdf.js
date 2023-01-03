import React from 'react';
import Manual from '../manual/Manual';
import Userguide from '../../assets/Userguide.pdf';

const Datapdf = () => {
  return (
    <div className='datapdf'>
        <Manual pdf={Userguide}/>
    </div>
  )
}

export default Datapdf