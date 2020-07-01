import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class AllItems extends React.Component {

    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col>
                            <br/><br/><h2> Shop All items </h2><hr/>
                        </Col>
                    </Row>
                    <Row className="productsContainer">

                    </Row>
                </Container>
            </>
        );
    }

}

export default AllItems;