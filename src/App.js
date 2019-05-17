import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import logo from './logo.svg';
import logo2 from './logo2.svg'; 
import '../src/assets/style/merx.css';

function App() {
  return (
    <div className="">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <img src={logo2} className="logo2" alt="logo" />
      </header>
      <section className='container-fluid'>
          <Row>
          <Col md='1'/>
            <Col md='4'>
            <div className='grid__section'>
              <h1 className='title_main'>ABOUT US</h1>
              <h2 className='title_main2'>WHO WE ARE</h2>
              <p className='text_main'>We are a digital hub that aims to make the 
                use of commuting benefits more flexible. 
                Allowing the user to distribute the deposited
                 amount to the most convenient modal and avoiding
                  the residues that are normally lost in traditional
                   means we reduce the friction in the daily transport 
                   and optimize travel time based on users needs.</p>
            </div>
            </Col>
            
            <Col md='1'/>
            <Col md='6' className='background_section'>
            </Col>
            <Col md='6' className='background_section2'>
            </Col>
            <Col md='1'/>
            <Col md='4' className=''>
              <h1 className='title_main'>ABOUT US</h1>
              <h2 className='title_main2'>WHO WE ARE</h2>
            </Col>
            <Col md='1'/>
          </Row>
      </section>
    </div>
  );
}

export default App;
