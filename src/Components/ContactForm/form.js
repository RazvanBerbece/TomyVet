import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import Emailer from "./Client/client";

class ContactForm extends React.Component {
  /**
   * Saves email, fname, lname, address, addressTwo, state, zip
   */

  constructor(props) {
    super(props);
    this.onSubmitShop = this.onSubmitShop.bind(this);
    this.onSubmitDev = this.onSubmitDev.bind(this);
    this.emailer =  new Emailer();
  }

  onSubmitShop(e) {
    e.preventDefault();
    this.emailer.sendEmailToShopContact(
      this.email.value,
      this.fname.value,
      this.lname.value,
      this.address.value,
      this.addressTwo.value,
      this.message.value
    );
  }

  onSubmitDev(e) {
    e.preventDefault();
    this.emailer.sendEmailToDevTeam(
      this.email.value,
      this.fname.value,
      this.lname.value,
      this.bugDesc.value
    );
  }

  render() {
    return (
      <>
        <br />
        <br />
        <Container>
          <Row>
            <Col md={4} className="d-md-block d-sm-none">
            </Col>
            <Col md={4} xs={12}>
              <h2> Contact the Shop </h2>
              <hr/>
              <Container>
                <Row>
                  <Col md={12} style={{textAlign: "center", color: "blue"}} id="resultContainerShop">
                  </Col>
                </Row>
              </Container>
              <Form>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address here"
                    ref={(input) => (this.email = input)}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      placeholder="Enter your first name"
                      ref={(input) => (this.fname = input)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      placeholder="Enter your last name"
                      ref={(input) => (this.lname = input)}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Group controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="1234 Main St"
                    ref={(input) => (this.address = input)}
                  />
                </Form.Group>

                <Form.Group controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    placeholder="Apartment, studio, or floor"
                    ref={(input) => (this.addressTwo = input)}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridMessage">
                    <Form.Label>Message</Form.Label>
                    <Form.Control 
                    placeholder="Your message here" 
                    ref={(input) => (this.message = input)}/>
                  </Form.Group>
                </Form.Row>

                <Button variant="primary" type="submit" onClick={this.onSubmitShop}>
                  Send
                </Button>
              </Form>
            </Col>
          </Row>
          <hr/>
          <br/>
          <Row>
            <Col md={4} className="d-md-block d-sm-none">
            </Col>
            <Col md={4} xs={12}>
              <h2> Report a Bug </h2>
              <hr/>
              <Container>
                <Row>
                  <Col md={12} style={{textAlign: "center", color: "blue"}} id="resultContainerDev">
                  </Col>
                </Row>
              </Container>
              <Form>
                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="Enter your email address here"
                    ref={(input) => (this.email = input)}
                  />
                </Form.Group>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridFName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control
                      placeholder="Enter your first name"
                      ref={(input) => (this.fname = input)}
                    />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridLName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control
                      placeholder="Enter your last name"
                      ref={(input) => (this.lname = input)}
                    />
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                  <Form.Group as={Col} controlId="formGridMessage">
                    <Form.Label>Bug Description</Form.Label>
                    <Form.Control
                    placeholder="Bug Description here" 
                    ref={(input) => (this.bugDesc = input)}/>
                  </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Button variant="primary" type="submit" onClick={this.onSubmitDev}>
                      Send
                    </Button>
                </Form.Row>
              </Form>
            </Col>
          </Row>
        </Container>
        <br/>
      </>
    );
  }
}

export default ContactForm;
