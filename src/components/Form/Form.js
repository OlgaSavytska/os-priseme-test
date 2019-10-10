import React, { Component } from 'react';
import s from './Form.module.css';
import Select from 'react-select';
import { Link } from "react-scroll";

const options = [
  { value: 'Понеділок', label: 'Понеділок' },
  { value: 'Вівторок', label: 'Вівторок' },
  { value: 'Середа', label: 'Середа' },
  { value: 'Четвер', label: 'Четвер' },
  { value: "П'ятниця", label: "П'ятниця" },
  { value: 'Субота', label: 'Субота' },
  { value: 'Неділя', label: 'Неділя' },
];
const findOption = value => options.find(opt => opt.value === value);
// const inputData1
class Form extends Component {
  state = {
    inputAgree: true,
    inputData: '',
    inputDay: '',
    inputNumber: '',
    inputAdress: '',
    inputYesOrNot: false,
    inputOkNoProblem: true
  }



  handleSubmit = e => {
    e.preventDefault();


    this.setState({
      inputAgree: true,
      inputData: '',
      inputDay: '',
      inputNumber: '',
      inputAdress: '',
      inputYesOrNot: false,
      inputOkNoProblem: true
    });

  };
  handleChecked = () => {
    this.setState({ inputAgree: !this.state.inputAgree })
    console.log(this.state);
  }
  handleChecked1 = () => {
    this.setState({ inputYesOrNot: !this.state.inputYesOrNot })
    console.log(this.state);
  }
  handleChecked2 = () => {
    this.setState({ nputOkNoProblem: !this.state.nputOkNoProblem })
    console.log(this.state);
  }
  // handleDataChecked = (inputData1) => {
  //   const inputData1 = "hhhhhhh";
  //   this.setState({ inputData: this.state.inputData1 })
  //   console.log(this.state);
  // }
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state);
  };
  onChangeSelect = opt => {
    this.setState({
      inputDay: opt.value,
    });
  };

  render() {
    const {
      inputDay,
      inputNumber,
      inputAdress,
    } = this.state;


    return (<div className={s.delivery_container} >
      <form className={s.form} onSubmit={this.handleChecked}>
        <div className={s.form_cont}>
          <h2 id="Fr" className={s.form_title}>Бланк на доставку виграшу</h2>

          <div className={s.form_flex}>
            <input
              name="inputAgree"
              checked={this.state.inputAgree}
              type="checkbox"
              onChange={this.handleChecked}
              className={s.form_agree} />
            <label className={s.label1}><p className={s.label1_text
            }>Я, Name,{'\n'} як Головний переможець Акції погоджуюсь отримати свій виграш – 317 000,00 гривень – готівкою.</p></label>
          </div>
          <p className={s.label2_text}>Я очікую доставку грошового Призу:</p>
          <div className={s.data_block}>
            <input
              name="inputData"
              value={'Першого тижня виплат (01–05.05)'}
              type="radio"
              onChange={this.handleChange}
              className={s.form_data} />
            <label className={s.label2}>
              <p className={s.label3_text}>Першого тижня виплат (01–05.05)</p>
            </label>
          </div>
          <div className={s.data_block}>
            <input
              name="inputData"
              value={'Другого тижня виплат (06–12.05)'}
              type="radio"
              onChange={this.handleChange}
              className={s.form_data} />
            <label className={s.label2}>
              <p className={s.label3_text}>Другого тижня виплат (06–12.05)</p>
            </label>
          </div>
          <div className={s.data_block}>
            <input
              name="inputData"
              value={'Третього тижня виплат (13–19.05)'}
              type="radio"
              onChange={this.handleChange}
              className={s.form_data} />
            <label className={s.label2}>
              <p className={s.label3_text}>Третього тижня виплат (13–19.05)</p>
            </label>
          </div>
          <div className={s.data_block}>
            <input
              name="inputData"
              value={'Четвертого тижня виплат (20–26.05)'}
              type="radio"
              onChange={this.handleChange}
              className={s.form_data} />
            <label className={s.label2}>
              <p className={s.label3_text}>Четвертого тижня виплат (20–26.05)</p>
            </label>
          </div>
          <div className={s.data_block}>
            <input
              name="inputData"
              value={'П’ятого тижня виплат (27.05–31.05).'}
              type="radio"
              onChange={this.handleChange}
              className={s.form_data} />
            <label className={s.label2}>
              <p className={s.label3_text}>П’ятого тижня виплат (27.05–31.05).</p>
            </label>
          </div>
          <div className={s.input_options_section}>
            <p className={s.select_desct}>В зручний для мене день тижня:</p>
            <Select
              required
              className={s.inputDay}
              value={findOption(inputDay)}
              options={options}
              onChange={this.onChangeSelect}
            >
            </Select>
          </div>
          <div className={s.input_number}>
            <p className={s.select_desct2}>Номер телефону для зв’язку:</p>
            <input
              name="inputNumber"
              type="number"
              value={inputNumber}
              onChange={this.handleChange}
              className={s.inputNumber}
              placeholder="+380(050)555-555-5"
              required
            />
          </div>
          <div className={s.input_adress}>
            <p className={s.select_desct3}>Номер телефону для зв’язку:</p>
            <input
              maxLength="1000"
              minLength="3"
              name="inputAdress"
              type="text"
              className={s.input_adress_form}
              placeholder="Область/Район/Населений пункт/Вулиця/Номер будинку/Номер квартири"
              value={inputAdress}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className={s.final}>
            <input
              name="inputYesOrNot"
              checked={this.state.inputYesOrNot}
              type="checkbox"
              onChange={this.handleChecked1}
              className={s.form_agree1} />
            <label className={s.label3}><p className={s.label3_text
            }> Я відмовляюсь від БЕЗКОШТОВНОЇ доставки мені виграшу. Прошу вислати мені 317 000,00 гривень поштовим переказом.</p></label>
          </div>
          <div className={s.final}>
            <input
              name="inputOkNoProblem"
              checked={this.state.inputOkNoProblem}
              type="checkbox"
              onChange={this.handleChecked2}
              className={s.form_agree2} />
            <label className={s.label4}><p className={s.label4_text
            }> Я заповнюю цей документ і роблю обов’язкове замовлення товарів</p></label>
          </div>
        </div>
        <Link
          activeClass="active"
          to="Congrat"
          spy={true}
          smooth={true}
          offset={-70}
          duration={1500}
          className={s.header_button}>
          <button type="submit" className={s.button}>
            НАДІСЛАТИ
        </button>
        </Link >
        <p className={s.congliration}>Щоб Служба автоматичної верифікації не відбракувала Ваш БЛАНК НА ДОСТАВКУ ВИГРАШУ, зробіть обов’язкове замовлення товарів із акційної пропозиції.</p>
      </form>
    </div >
    )
  }
}

export default Form;
