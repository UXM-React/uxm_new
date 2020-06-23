import React from 'react';
import './App.css';
import Main from './components/main/main';
import Header from './components/header/header';
import LeftNav from './components/left-navigation/left-nav';
import {Col, Row} from 'react-bootstrap';

function App() {
  return (
    <div className="App container-fulid sb-nav-fixed">
      
      <Header/>
      <Row>
        <Col lg="2" className="border-right leftNav">
          <LeftNav/>
        </Col>
        <Col>
          <Main/>
        </Col>
      </Row>
      </div>
  );
}

export default App;
