import React from 'react';
import s from './Delivery.module.css';
import { Link } from "react-scroll";
import copyy from '../../images/copy.png';

const Delivery = () => {
  return <div className={s.delivery_container}>
    <p className={s.delivery_title}>Ми надсилаємо Вам “БЛАНК НА ДОСТАВКУ ВИГРАШУ”.</p>
    <h2 className={s.delivery_name}>Name</h2>
    <div className={s.div_flex}>
      <p className={s.delivery_istruction}>щоб отримати свій виграш – впишіть у “БЛАНК” зручну для Вас дату отримання виграшу та надішліть нам. Після цього кур’єр “PrizeMe” доставить Вам {'\n'}<span className={s.num}>317 000,00 гривень</span> прямо додому.</p>
      <img className={s.copy} src={copyy} alt="copy" />
    </div>
    <p className={s.delivery_istruction_border}>ЗАПОВНЕНИЙ “БЛАНК НА ДОСТАВКУ ВИГРАШУ” – ВАША ГАРАНТІЯ ОТРИМАННЯ <span className={s.num}>317 000,00 ГРИВЕНЬ!</span></p>
    <Link
      activeClass="active"
      to="Fr"
      spy={true}
      smooth={true}
      offset={-70}
      duration={1500}
      className={s.header_button}>
      <button className={s.delivery_button}>ЗАПОВНИТИ БЛАНК</button>
    </Link>
  </div >
}

export default Delivery;
