import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header/Header';
import FinSector from '../src/components/FinSector/FinSector';
import UAreTheBest from '../src/components/UAreTheBest/UAreTheBest';
import Delivery from '../src/components/Delivery/Delivery';
import Instruction from '../src/components/Instruction/Instruction';
import Form from '../src/components/Form/Form';
import Congratulation from '../src/components/Congratulation/Congratulation';
import Modal2 from './components/Modal2/Modal2';
import Modal1 from './components/Modal1/Modal1';




class App extends Component {
  state = {
    isModalOpen1: false,
    isModalOpen2: false,
  };

  openModalWindow1 = url => {
    this.setState({
      isModalOpen1: true,
      largeImageURL: url,
      isModalOpen2: false,
    });
  };
  openModalWindow2 = url => {
    this.setState({
      isModalOpen1: false,
      largeImageURL: url,
      isModalOpen2: true,
    });
  };
  closeModalWindow = e => {
    if (e.target.tagName === 'IMG') {
      return;
    }
    this.setState({
      isModalOpen1: false,
      isModalOpen2: false,
    });
  };

  render() {

    const { isModalOpen1, isModalOpen2, largeImageURL } = this.state;
    return (
      <>
        <Header />
        <FinSector
          openModal1={this.openModalWindow1}
          openModal2={this.openModalWindow2}
        />
        {isModalOpen1 && (
          <Modal1 largeURL={largeImageURL} closeModal={this.closeModalWindow} />)}
        {isModalOpen2 && (
          <Modal2 largeURL={largeImageURL} closeModal={this.closeModalWindow} />)}
        {/* {isModalOpen && (
          <Modal1 largeURL={largeImageURL} closeModal={this.closeModalWindow} />)} */}
        <UAreTheBest />
        <Delivery />
        <Instruction />
        <Form />
        <Congratulation />
      </>
    )
  }
}

export default App;


