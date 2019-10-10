import React from 'react';
import s from './Instruction.module.css';
// import back from '../../images/Ellipse.png';

const Instruction = () => {
  return <div className={s.container_best}>
    <div className={s.best_color1}>
      {/* <img src={back} alt="Elipse" className={s.elipse1} /> */}
      <div className={s.borders2}>
        <p className={s.ist_title}>ІНСТРУКЦІЯ З ОДЕРЖАННЯ ВИГРАШУ</p>
        <ul className={s.ist_items}>
          <li className={s.ist_item}>
            <p className={s.ist_item_text}>1. Завантажте ЧЕРВОНИЙ ДИПЛОМ ПЕРЕМОЖЦЯ або перепишіть його номер. Ознайомтся з ДОДАТКОМ.</p>
          </li>
          <li className={s.ist_item}>
            <p className={s.ist_item_text1}>2. Заповніть “БЛАНК НА ДОСТАВКУ ВИГРАШУ”. Обов’язково впишіть зручні для Вас тиждень виплат та день одержання грошей, а також адресу.</p>
          </li>
          <li className={s.ist_item}>
            <p className={s.ist_item_text2}>3. Оберіть уподобані товари з акційної товарної пропозиції. Акційна пропозиція від PrizeMe дійсна лише протягом 24 годин! Замовте будь-які товари за СУПЕРЦІНОЮ!</p>
          </li>
          <li className={s.ist_item_non}>
            <p className={s.ist_item_non_text}>Увага: без Вашого замовлення “БЛАНК НА ДОСТАВКУ ВИГРАШУ” автоматично відбракується Системою автоматичної верифікації, а отже, виплата Вам 317 000,00 гривень НЕ ВІДБУДЕТЬСЯ!</p>
          </li>
          <li className={s.ist_item}>
            <p className={s.ist_item_text3}>4. Заберіть на пошті посилку із замовленими товарами та очікуйте кур’єра, який БЕЗКОШТОВНО ПРИВЕЗЕ Вам гроші прямо додому.</p>
          </li>
        </ul>
        <p className={s.ist_if}>Якщо НЕ НАДІШЛЕТЕ ВІДПОВІДЬ – ВТРАТИТЕ 317 000,00 гривень назавжди!</p>
      </div>
    </div>
  </div >
}

export default Instruction;
