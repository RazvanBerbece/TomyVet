import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import LatestMerch from "../Components/LatestMerch/ltstmerch";

import FadeIn from 'react-fade-in';

class Intro extends Component {
  render() {
    return (
      <>
        <Jumbotron className="jumbo">
          <h1> TomyVet </h1>
          <p>Get the best prices for the best quality !</p>
          <p>
            <Button variant="primary">Shop Now</Button>
          </p>
        </Jumbotron>
        <Container>
          <Row>
            <Col xs={12} md={6}>
              <FadeIn>
                <h2 style={{ textAlign: "center" }}> Newest Items in Shop </h2>
              </FadeIn>
              <hr />
              <br />
              <br />
              <FadeIn delay={100} >
                <LatestMerch />
                <LatestMerch />
              </FadeIn>
            </Col>
            <Col xs={12} className="d-md-none d-sm-block">
              <hr />
              <br />
            </Col>
            <Col xs={12} md={6}>
              <FadeIn>
                <h2 style={{ textAlign: "center" }}> Latest Deals </h2>
              </FadeIn>
              <hr />
              <br />
              <br />
              <FadeIn delay={100} >
                <LatestMerch />
                <LatestMerch />
              </FadeIn>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col style={{ textAlign: "center" }}>
              Str. Bistritei Nr. 36 <br /> Opens at 8AM on Tuesdays
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Intro;
