import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./checkoutItem.css";

class CheckoutItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Container fluid>
                    <Row>
                        <Col md={2} style={{display: "flex", justifyContent: "center"}}>
                            Photo
                        </Col>
                        <Col md={8} style={{display: "flex", justifyContent: "center"}}>
                            Desc
                        </Col>
                        <Col md={2} style={{display: "flex", justifyContent: "end"}}>
                            X
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

}

export default CheckoutItem;