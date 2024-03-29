import React from 'react';
import s from '../Header/Header.module.css';
import logo from '../../images/Group-1.png';
// import back from '../../images/Ellipse.png';
import woman from '../../images/Depositphotos_27353059_xl-2015.png';
import { Link } from "react-scroll";

const Header = () => {
  return <div className={s.container_header}>
    <div className={s.header_color1}>
      <div className={s.new_test}>
        <div className={s.norm}>
          <div className={s.borders}>
            <div className={s.text}>
              <p className={s.text_little_header}>*У разі Вашої перемоги в Акції "Золотий Фонд" та виникнення подібної ситуації Ви можете отримати такого листа */</p>
              <img src={logo} alt="Logo" />
              <p className={s.name_user}>Name</p>
              <p className={s.text_prise}>На вас чекає грандіозне нагородження!</p>
              <p className={s.header_text_description}>Від щирого серця вітаю Вас! Ви заслужено здобули перемогу і будете винагороджені по максимуму! Мені приємно усвідомлювати, що саме Ви отримаєте Головний приз Акції – 317 000,00 гривень!</p>
              <Link
                activeClass="active"
                to="Fr"
                spy={true}
                smooth={true}
                offset={-70}
                duration={1500}
                className={s.header_button}>
                <p className={s.header_button_text}>обрати дату {'\n'}
                  нагородження</p>
              </Link>
            </div>
            <div className={s.woman}>
              <img src={woman} alt="happy woman" className={s.header_woman} />
              <p className={s.block_signature}>З повагою, Голова Фінансового відділу {'\n'}з виплати призів Олена Філімонова. *</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div >

}

export default Header;
