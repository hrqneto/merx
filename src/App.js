import React from 'react';
import { Container, Row, Col } from 'reactstrap';

import logo from './logo.svg';
import '../src/assets/style/merx.css';

function App() {
  return (
    <div className="">
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
        <h1>
          Merx
        </h1>
        <p>FINTECH</p>
      </header>
      <section>
        <Container>
          <Row>
            <Col md='6'>
              <h1 className='text_main'>ABOUT US</h1>
              <h2 className='text_main2'>WHO WE ARE</h2>
            </Col>
            <Col md='6' className='background_section'>
              <h1 className='text_main'>ABOUT US</h1>
              <h2 className='text_main2'>WHO WE ARE</h2>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default App;
