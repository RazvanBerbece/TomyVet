import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Jumbotron from "react-bootstrap/Jumbotron";
import LatestMerch from "../Components/LatestMerch/ltstmerch";

import ProductReceiver from "../Shop/AllItems/ShopLogic/productReceiver";

import {
  NavLink,
} from "react-router-dom";

import FadeIn from 'react-fade-in';

class Intro extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      received: false,
      products: [],
      lastTwoAdded: [] // props to <LatestMerch />
    }
  }

  componentDidMount() {  
    if (!this.state.received) {
      const receiver = new ProductReceiver();
      receiver.getAllProducts((productsList) => {
          if (productsList.length) {
              this.setState({
                  products: productsList,
                  received: true
              });
              
              /* Getting the last two products added to the shop */
              var maxSecondsOne = 0, maxSecondsTwo = 0;
              var latestProductOne = null, latestProductTwo = null;
              for (var i = 0; i < this.state.products.length; i++) {
                const productTime = Date.parse(this.state.products[i].createdAt);
                if (productTime > maxSecondsOne) {
                  maxSecondsOne = productTime;
                  latestProductOne = this.state.products[i];
                }
              }

              for (var i = 0; i < this.state.products.length; i++) {
                const productTime = Date.parse(this.state.products[i].createdAt);
                if (productTime > maxSecondsTwo && productTime != maxSecondsOne) {
                    maxSecondsTwo = productTime;
                    latestProductTwo = this.state.products[i];
                }
              }

              this.setState({
                lastTwoAdded: [latestProductOne, latestProductTwo]
              });
          }
      });
    }
}

  render() {
    return (
      <>
        <Jumbotron className="jumbo">
          <h1> TomyVet </h1>
          <p>Get the best prices for the best quality !</p>
          <p>
            <Button variant="primary">
              <NavLink to="/allitems" style={{color: "white", textDecoration: "none"}}>Shop Now</NavLink>
            </Button>
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
                <LatestMerch {...this.state.lastTwoAdded[0]}/>
                <LatestMerch {...this.state.lastTwoAdded[1]}/>
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
                <LatestMerch {...this.state.lastTwoAdded[0]}/>
                <LatestMerch {...this.state.lastTwoAdded[1]}/>
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
