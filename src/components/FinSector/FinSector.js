import React from 'react';
import s from '../FinSector/FinSector.module.css';



const FinSector = () => {
  return <div className={s.finsector_container}>
    <p className={s.fin_sector_name}>Name,</p>
    <p className={s.fin_sector_name1}>вітаємо!</p>
    <p className={s.fin_sector_congratulations}>Ви успішно пройшли всі етапи відбору і отримуєте</p>
    <p className={s.fin_sector_red_title}>ЧЕРВОНИЙ ДИПЛОМ ПЕРЕМОЖЦЯ!</p>
  </div>
}

export default FinSector;
