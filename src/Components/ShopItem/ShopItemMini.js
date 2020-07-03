import React from 'reactn';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './ShopItemMini.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import ReactTooltip from "react-tooltip";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class ShopItemMini extends React.Component {

    constructor(props) {
        super(props);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.state = {      
            productsInCart: this.global.shoppingCart            
        }           
    }

    handleAddToCart() {         
        var localCart = this.global.shoppingCart;
        var madeChange = false;
        /* Checking if there is already one product with the same id => Increase specific product counter */
        for (var i = 0; i < localCart.length; i++) {
            if (this.props.id == localCart[i].product.id) {
                localCart[i].quantity += 1;         
                madeChange = true;
            }
        }
        if (!madeChange) {  
            localCart.push({
                quantity: 1,        
                product: this.props
            }); 
        }                       
        this.setGlobal({
            shoppingCart: localCart         
        });
        cookies.set('shoppingCart', this.global.shoppingCart, { path: '/' });
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
                                        {this.props.price} RON
                                    </Col>
                                    &nbsp;&nbsp;&nbsp;
                                    <Col style={{textAlign: "center", width: "50%"}} className="priceCol addToCartWrapper" onClick={this.handleAddToCart}>
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