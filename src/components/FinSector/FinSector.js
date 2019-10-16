import React from 'react';
import s from '../FinSector/FinSector.module.css';
import diplom1 from '../../images/Frame6.png';
import diplom2 from '../../images/Frame5.2.png';
import Modal1 from '../Modal1/Modal1';
import Modal2 from '../Modal2/Modal2';






const FinSector = ({ openModal }) => {
  return <div className={s.finsector_container
  }>

    <p className={s.fin_sector_name}>Name,</p>
    <p className={s.fin_sector_name1}>вітаємо!</p>
    <p className={s.fin_sector_congratulations}>Ви успішно пройшли всі етапи відбору і отримуєте</p>
    <p className={s.fin_sector_red_title1}>ЧЕРВОНИЙ ДИПЛОМ ПЕРЕМОЖЦЯ!</p>
    <div className={s.media_flex1}>
      <div className={s.media_flex2}>
        <p className={s.fin_sector_proud_of_you}>Фінансовий відділ “PrizeMe” пишається Вами!</p>
        <p className={s.fin_sector_p_f_y_descr1}>Ви дуже швидко реагували на листи і правильно заповнювали офіційні документи, саме тому перед нагородженням ми вирішили видати Вам ЧЕРВОНИЙ ДИПЛОМ ПЕРЕМОЖЦЯ, що надає Вам унікальне право на першочергову та БЕЗКОШТОВНУ доставку виграшу.</p>
        <p className={s.fin_sector_p_f_y_descr2}>Радійте! Гонитва за виграшем завершена. Ваші документи підписано, гроші підготовлено. Тепер Ви гарантовано одержите <span className={s.num}>317 000,00 гривень</span>  без черг і на першу вимогу.</p>
        <div className={s.div_block}>
          <p className={s.fin_sector_block}>І зараз все, що лишилося – лише повідомити нам зручний для Вас день доставки грошей! Це останній обов’язковий крок для отримання 317 000,00 гривень.</p>
        </div>
        <p className={s.fin_sector_p_f_y_descr3}>Завантажте ДИПЛОМ або запишіть його номер для пред’явлення кур’єру Служби доставки (за бажанням можете роздрукувати ДИПЛОМ, після завантаження). Ознайомтеся з ДОДАТКОМ, щоб дізнатись усі подробиці Вашої перемоги.</p>
      </div>
      <div className={s.media_flex3}>
        <div className={s.diplom_overlow}>
          <button
            onClick={() => openModal(Modal2)}
            type="button"
            className={s.fullscreen_button}
            id="sertificate"
          >
            <img id="sertificate" src={diplom1} alt="diplom1" className={s.diplom1} /> </button>
        </div>
        <a href="../../images/Download.zip" download>
          <button className={s.button_dowload}>ЗАВАНТАЖИТИ</button>
        </a>
        <button
          onClick={() => openModal(Modal1)}
          type="button"
          className={s.fullscreen_button1}
          id="sertificate1"
        >
          <img id="sertificate1" src={diplom2} alt="diplom2" className={s.diplom2} /></button>
      </div>
    </div>
    <p className={s.fin_sector_red_title2}>Завдяки Вашому ЧЕРВОНОМУ ДИПЛОМУ ПЕРЕМОЖЦЯ доставку виграшу буде здійснено БЕЗКОШТОВНО!</p>
  </div >
}



export default FinSector;
