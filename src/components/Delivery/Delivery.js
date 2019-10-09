import React from 'react';
import s from './Delivery.module.css';

const Delivery = () => {
  return <div className={s.delivery_container}>
    <p className={s.delivery_title}>Ми надсилаємо Вам “БЛАНК НА ДОСТАВКУ ВИГРАШУ”.</p>
    <h2 className={s.delivery_name}>Name</h2>
    <p className={s.delivery_istruction}>щоб отримати свій виграш – впишіть у “БЛАНК” зручну для Вас дату отримання виграшу та надішліть нам. Після цього кур’єр “PrizeMe” доставить Вам {'\n'}<span className={s.num}>317 000,00 гривень</span> прямо додому.</p>
    <p className={s.delivery_istruction_border}>ЗАПОВНЕНИЙ “БЛАНК НА ДОСТАВКУ ВИГРАШУ” – ВАША ГАРАНТІЯ ОТРИМАННЯ <span className={s.num}>317 000,00 ГРИВЕНЬ!</span></p>
    <button className={s.delivery_button}>ЗАПОВНИТИ БЛАНК</button>
  </div >
}

export default Delivery;
