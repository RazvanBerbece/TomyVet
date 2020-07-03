import React, { Component } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProductReceiver from './ShopLogic/productReceiver';
import ShopItemMini from '../../Components/ShopItem/ShopItemMini';

import FadeIn from 'react-fade-in';

class AllItems extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            products: [],
            productsMapping: []
        };
    }

    componentDidMount() {  
        const receiver = new ProductReceiver();
        receiver.getAllProducts((productsList) => {
            if (productsList.length) {
                this.setState({
                    products: productsList
                });
                this.setState({
                    productsMapping: this.state.products.map((item, i) => (
                        <Col md={4} lg={3} xs={12} key={i} style={{display: "flex", justifyContent: "center", paddingBottom: "3.33%"}}>
                            <ShopItemMini {...item} />
                        </Col>
                    ))
                });
            }
        });
    }

    render() {
        return (
            <Container id="shop" fluid>
                <Row>
                    <Col>
                        <br/><br/><h2 style={{paddingLeft: "1.33%"}}> Shop All items </h2><hr/><br/><br/>
                    </Col>
                </Row>
                <FadeIn transitionDuration={2500}>
                    <Row className="justify-content-md-center">
                        { this.state.productsMapping }
                    </Row>
                </FadeIn>
            </Container>
        );
    }

}

export default AllItems;