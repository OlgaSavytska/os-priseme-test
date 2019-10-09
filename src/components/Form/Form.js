import React, { Component } from 'react';
import s from './Form.module.css';
import arrow from '../../images/Vector3.7.png';

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
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };


  handleSubmit = e => {
    e.preventDefault();

    // const { inputAgree,
    //   inputData,
    //   inputDay,
    //   inputNumber,
    //   inputAdress,
    //   inputYesOrNot,
    //   inputOkNoProblem } = this.state;

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


  render() {
    const {
      inputData,
      inputDay,
      inputNumber,
      inputAdress,
    } = this.state;
    return (<div className={s.delivery_container} >
      <div className={s.form_cont}>
        <h2 className={s.form_title}>Бланк на доставку виграшу</h2>
        <form className={s.form} onSubmit={this.handleChecked}>
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
        </form>
      </div>
    </div >)
  }
}

export default Form;
