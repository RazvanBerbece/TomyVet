import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./footer.css";

function Footer() {
  return (
    <Container fluid className="bg-primary fixed-bottom">
      <Row>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p
            style={{
              textAlign: "center",
              color: "white",
              marginBottom: "0",
              paddingBottom: "0",
            }}
          >
            {" "}
            Copyright © 2020 Antonio Berbece{" "}
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;