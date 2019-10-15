import React from 'react';
import s from './Modal2.module.css';
import largeURL2 from '../../images/Diplom3.jpg';
import largeURL3 from '../../images/Diplom4.jpg';



const Modal2 = ({ closeModal }) => {
  return (
    <div className={s.overlay} onClick={closeModal}>
      <div className={s.modal}>
        <img src={largeURL2} alt="imgLarge" />
        <img src={largeURL3} alt="imgLarge" />
        }
      </div>
    </div>
  );
};

export default Modal2;
