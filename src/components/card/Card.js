import React from 'react';
import { useState } from 'react';
import Listing from '../listing/Listing';
import Overlay from '../overlay/Overlay';
import Modal from '../modal/Modal';
import { AnimatePresence } from 'framer-motion';

const Card = ({ data }) => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className='card'>
        <Listing data={ data } open={openModal}/>
        <AnimatePresence>
          {open && <Overlay close={closeModal}>{<Modal data={data} close={closeModal}/>}</Overlay>}
        </AnimatePresence>
    </div>
  )
}

export default Card