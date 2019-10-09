import React from 'react';
import s from '../FinSector/FinSector.module.css';



const FinSector = () => {
  return <div className={s.finsector_container}>
    <p className={s.fin_sector_name}>Name,</p>
    <p className={s.fin_sector_name1}>вітаємо!</p>
    <p className={s.fin_sector_congratulations}>Ви успішно пройшли всі етапи відбору і отримуєте</p>
    <p className={s.fin_sector_red_title}>ЧЕРВОНИЙ ДИПЛОМ ПЕРЕМОЖЦЯ!</p>
    <p className={s.fin_sector_proud_of_you}>Фінансовий відділ “PrizeMe” пишається Вами!</p>
    <p className={s.fin_sector_p_f_y_descr1}>Ви дуже швидко реагували на листи і правильно заповнювали офіційні документи, саме тому перед нагородженням ми вирішили видати Вам ЧЕРВОНИЙ ДИПЛОМ ПЕРЕМОЖЦЯ, що надає Вам унікальне право на першочергову та БЕЗКОШТОВНУ доставку виграшу.</p>
  </div>
}

export default FinSector;
