import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFireAlt } from '@fortawesome/free-solid-svg-icons';
import { faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import pawLogo from './Components/LatestMerch/assets/img/paw.png';
import Jumbotron from 'react-bootstrap/Jumbotron';
import LatestMerch from './Components/LatestMerch/ltstmerch.js';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function App() {
  return (
    <>
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt=""
          src={pawLogo}
          width="30"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      TomyVet
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Shop">Shop</Nav.Link>
      <Nav.Link href="#Contact">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-light">Search</Button>
    </Form>
  </Navbar>
    <Jumbotron className='jumbo'>
      <h1> TomyVet </h1>
      <p>
        Get the best prices for the best quality !
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <h2 style={{textAlign: "center"}}> Newest Items in Shop &nbsp; <FontAwesomeIcon icon={faStoreAlt} /> </h2>
          <br/><br/>
          <LatestMerch />
          <LatestMerch />
        </Col>
        <Col xs={12} className='d-md-none d-sm-block'>
          <hr/>
          <br/>
        </Col>
        <Col xs={12} md={6}>
          <h2 style={{textAlign: "center"}}> Latest Deals &nbsp; <FontAwesomeIcon icon={faFireAlt} /> </h2>
          <br/><br/>
          <LatestMerch />
          <LatestMerch />
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col style={{textAlign: "center"}}>
          Find us at ...
        </Col>
      </Row>
    </Container>
    <br/><br/>
    <Container fluid className="bg-primary">
      <Row>
        <Col style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          <p style={{textAlign: "center", color: "white", marginBottom: "0", paddingBottom: "0"}}> Antonio Berbece @2020 </p>
        </Col>
      </Row>
    </Container>
    </>
  );
}

export default App;
