import React, { Component } from 'reactn';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ShopItemMini from "../Components/ShopItem/ShopItemMini";
import CheckoutItem from "../Components/CheckoutItem/checkoutItem";

import "./cart.css";

class Cart extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>  
                <Container fluid>
                    <Row>
                        <Col>
                            <h3> My Cart </h3>
                        </Col>
                    </Row>
                    <hr/><br/><br/>
                    <Row>
                        <Col>
                            <ShopItemMini {...this.global.shoppingCart[0]} />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <CheckoutItem />
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }

}

export default Cart;