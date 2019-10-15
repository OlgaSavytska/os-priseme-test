import React from 'react';
import Modal1 from '../src/components/Modal1/Modal1';
import Modal2 from '../src/components/Modal2/Modal2';
import openModal from '../src/components/FinSector/FinSector';

const Modal = () => {
  if (!openModal) {
    return <Modal1 />
  } else { return <Modal2 /> }
}

export default Modal;
