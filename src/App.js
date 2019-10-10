import React from 'react';
import './App.css';
import Header from '../src/components/Header/Header';
import FinSector from '../src/components/FinSector/FinSector';
import UAreTheBest from '../src/components/UAreTheBest/UAreTheBest';
import Delivery from '../src/components/Delivery/Delivery';
import Instruction from '../src/components/Instruction/Instruction';
import Form from '../src/components/Form/Form';
import Congratulation from '../src/components/Congratulation/Congratulation';


function App() {
  return (
    <>
      <Header />
      <FinSector />
      <UAreTheBest />
      <Delivery />
      <Instruction />
      <Form />
      <Congratulation />
    </>
  )
}

export default App;


