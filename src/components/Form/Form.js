import React, { Component } from 'react';
import s from './Form.module.css';


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


  render() {
    const {
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
          <p className={s.label2_text}>Я очікую доставку грошового Призу:</p>
          <input
            name="inputData"
            value={'Першого тижня виплат (01–05.05)'}
            type="radio"
            onChange={this.handleChange}
            className={s.form_data} />
          <input
            name="inputData"
            value={'Другого тижня виплат (06–12.05)'}
            type="radio"
            onChange={this.handleChange}
            className={s.form_data} />
        </form>
      </div>
    </div >)
  }
}

export default Form;
