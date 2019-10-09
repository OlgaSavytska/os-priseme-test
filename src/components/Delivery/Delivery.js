import React from 'react';
import s from './Delivery.module.css';

const Delivery = () => {
  return <div className={s.delivery_container}>
    <p className={s.delivery_title}>Ми надсилаємо Вам “БЛАНК НА ДОСТАВКУ ВИГРАШУ”.</p>
    <h2 className={s.delivery_name}>Name</h2>
    <p className={s.delivery_istruction}></p>
  </div>
}

export default Delivery;
