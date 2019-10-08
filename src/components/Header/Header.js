import React from 'react';
import s from '../Header/Header.module.css';
import logo from '../../images/Group-1.png';

const Header = () => {
  return <div className={s.container_header}>
    <div className={s.header_color1}>
      <p className={s.text_little_header}>*У разі Вашої перемоги в Акції "Золотий Фонд" та виникнення подібної ситуації Ви можете отримати такого листа */</p>
      <img src={logo} alt="Logo" />
      <p className={s.name_user}>Name</p>
      <p className={s.text_prise}>На вас чекає грандіозне нагородження!</p>
    </div>
  </div>
}

export default Header;
