import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import './ShopItemMini.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

class ShopItemMini extends React.Component {

        /*
            this.thumbnail = props.thumbSrc;
            this.title = props.title;
            this.desc = props.desc;
            this.price = props.price !== undefined ? props.price : "0.00";
        */
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <div className="miniShopItemWrapper">
                    <div className="imageContWrapper">
                        <div className="miniImageContainer">
                            <img src={this.props.thumbSrc} alt="product photo" width={115} height={115} />
                        </div>
                        <div className="detailsWrapper" data-tip="Find out more about this product">
                            <FontAwesomeIcon icon={faInfoCircle} />
                        </div>
                        <ReactTooltip />
                    </div>
                    <div className="productInfo">
                        <Container style={{height: "100%"}}>
                            <Row>
                                <Col style={{textAlign: "center"}}>
                                    {this.props.title}
                                    <hr/>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{textAlign: "center"}}>
                                    <div className="descContainer">
                                        {this.props.desc}
                                    </div>
                                </Col>
                            </Row>
                            <br/>
                            <div className="priceContainerRow">
                                <Row>
                                    <Col style={{textAlign: "center", width: "50%", color: "white"}} className="bg-primary priceCol">
                                        {this.props.price}
                                    </Col>
                                    &nbsp;&nbsp;&nbsp;
                                    <Col style={{textAlign: "center", width: "50%"}} className="priceCol addToCartWrapper">
                                        Add To Cart
                                    </Col>
                                </Row>
                            </div>
                        </Container>
                    </div>
                </div>
            </>
        );
    }

}

export default ShopItemMini;