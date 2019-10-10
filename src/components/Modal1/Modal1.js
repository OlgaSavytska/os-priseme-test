import React from 'react';
import s from './Modal1.module.css';
import largeURL from '../../images/Frame6.jpg';


const Modal1 = ({ closeModal }) => {
  return (
    <div className={s.overlay} onClick={closeModal}>
      <div className={s.modal}>
        <img src={largeURL} alt="imgLarge" />
      </div>
    </div>
  );
};

export default Modal1;
