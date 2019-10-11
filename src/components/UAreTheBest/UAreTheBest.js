import React from 'react';
import s from './UAreTheBest.module.css';
// import back from '../../images/Ellipse.png';
import man from '../../images/man.png';

const UAreTheBest = () => {
  return <div className={s.container_best}>
    <div className={s.best_color1}>
      {/* <img src={back} alt="Elipse" className={s.elipse1} /> */}
      <div className={s.borders2}>
        <div className={s.div_flex}>
          <p className={s.best_name}>Name,</p>
          <p className={s.best_descr}>Ви - найкращий клієнт компанії!</p>
          <p className={s.best_descr2}>Ви - Власник ЧЕРВОГО ДИПЛОМА ПЕРЕМОЖЦЯ!</p>
          <p className={s.best_descr3}>Ми вже готові доставити Вам виграш за адресою Вашого проживання. Головне – повідомте, коли Вам буде зручно зустріти кур’єра компанії та одержати гроші.</p>
          <p className={s.best_descr4}>Ви можете обрати будь-який тиждень виплат та день (навіть вихідний) для візиту кур’єра.</p>
        </div>
        <img src={man} alt="man" className={s.man}></img>
      </div>
    </div>
  </div >

}

export default UAreTheBest;
