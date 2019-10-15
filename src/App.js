import React, { Component } from 'react';
import './App.css';
import Header from '../src/components/Header/Header';
import FinSector from '../src/components/FinSector/FinSector';
import UAreTheBest from '../src/components/UAreTheBest/UAreTheBest';
import Delivery from '../src/components/Delivery/Delivery';
import Instruction from '../src/components/Instruction/Instruction';
import Form from '../src/components/Form/Form';
import Congratulation from '../src/components/Congratulation/Congratulation';
import Modal from '../src/Modal';



class App extends Component {
  state = {
    isModalOpen: false,
  };
  openModalWindow = url => {
    this.setState({
      isModalOpen: true,
      largeImageURL: url,

    });
  };
  closeModalWindow = e => {
    if (e.target.tagName === 'IMG') {
      return;
    }
    this.setState({
      isModalOpen: false,
    });
  };

  render() {

    const { isModalOpen, largeImageURL, largeImageURL2 } = this.state;
    return (
      <>
        <Header />
        <FinSector
          openModal={this.openModalWindow}
          openModal1={this.openModalWindow}
        />
        {isModalOpen && (
          <Modal largeURL={largeImageURL} closeModal={this.closeModalWindow} />)}

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


