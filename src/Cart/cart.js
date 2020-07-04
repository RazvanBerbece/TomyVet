import React from "reactn";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import ReactTooltip from "react-tooltip";

import "./cart.css";
import Button from "react-bootstrap/Button";

import CheckoutClient from './CheckoutLogic/checkout';

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Cart extends React.Component {
    constructor(props) {
        super(props);                  
        this.handleDeleteButton = this.handleDeleteButton.bind(this);   
        this.handleCheckoutButton = this.handleCheckoutButton.bind(this);
        this.state = {      
            checkoutMapping: [],            
            currentCartTotal: 0.0,
            productsFromCookie: cookies.get('shoppingCart'),    
            finishedPurchase: false              
        };  
    }
    
    showCheckoutButton() {
        if (this.global.shoppingCart.length) {
            return (
                <>
                    <Button className="checkoutButton" onClick={this.handleCheckoutButton}>
                        Checkout
                    </Button>
                </>
            );
        }
        else {
            return;
        }
    }

    calculateTotalPrice() {
        console.log(this.state.productsFromCookie);
        var total = 0.0;
        for (var i = 0; i < this.global.shoppingCart.length; i++) {
            total += parseFloat(this.global.shoppingCart[i].product.price) * this.global.shoppingCart[i].quantity;
        }
        this.setState({
            currentCartTotal: total,
        });
    }

    handleDeleteButton(item) { // Will remove items one by one
        var localCart = this.global.shoppingCart;
        /* Removing from the quantity of the specified product */
        for (var i = 0; i < localCart.length; i++) {
            if (item.product.id === localCart[i].product.id) {
                if (localCart[i].quantity) {
                    localCart[i].quantity -= 1;
                    break;
                }
            }
        }
        /* Check if there are any products with quantity 0 & cleaning */
        for (var j = 0; j < localCart.length; j++) {
            if (!localCart[j].quantity) {
                localCart.splice(j, 1)
            }
            else {
                j++;
            }
        }
        /* Update state variables with the new list */
        this.setGlobal({
            shoppingCart: localCart
        });
        cookies.set('shoppingCart', this.global.shoppingCart);
        this.calculateTotalPrice(); // total price update
        this.setState({
            checkoutMapping: this.global.shoppingCart.map((item, i) => {
                return (
                    <>
                        <Row key={i}>
                            <Col
                                md={3}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src={item.product.thumbSrc}
                                    alt="product"
                                    width={60}
                                    height={60}
                                    style={{ paddingBottom: "2.33%" }}
                                />
                            </Col>
                            <Col
                                md={3}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    maxHeight: "100px",
                                    overflow: "auto",
                                    borderLeft:
                                        "1px solid rgba(135, 135, 135, 0.5)",
                                }}
                            >
                                {item.product.title}
                            </Col>
                            <Col
                                md={3}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                    {" "}
                                    {item.quantity === 1
                                        ? `${item.product.price} RON`
                                        : `${item.product.price} RON x ${item.quantity} items`}{" "}
                            </Col>
                            <Col
                                md={3}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    data-tip="Remove item from cart"
                                    className="deleteIcon"
                                    onClick={() => this.handleDeleteButton(item)}
                                />
                                <ReactTooltip />
                            </Col>
                        </Row>
                        <hr />
                    </>
                );
            })
        });
    }

    handleCheckoutButton() {
        if (!this.global.shoppingCart.length) {
            console.log('Cart is empty.');
            return;
        }
        else {
            const checkoutClient = new CheckoutClient();
            checkoutClient.sendOrderToAPI(this.global.shoppingCart, (err, paymentUrl) => {
                if (!err) {
                    console.log(paymentUrl);
                    var win = window.open(paymentUrl, '_blank');
                }
            });
            // Clearing the contents of the cart after new tab opening
            this.setGlobal({
                shoppingCart: []
            });
            this.setState({
                finishedPurchase: true
            });
            this.calculateTotalPrice();
            this.setState({
                checkoutMapping: this.global.shoppingCart.map((item, i) => {
                    return (
                        <>
                            <Row key={i}>
                                <Col
                                    md={3}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <img
                                        src={item.product.thumbSrc}
                                        alt="product"
                                        width={60}
                                        height={60}
                                        style={{ paddingBottom: "2.33%" }}
                                    />
                                </Col>
                                <Col
                                    md={3}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        maxHeight: "100px",
                                        overflow: "auto",
                                        borderLeft:
                                            "1px solid rgba(135, 135, 135, 0.5)",
                                    }}
                                >
                                    {item.product.title}
                                </Col>
                                <Col
                                    md={3}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                        {" "}
                                        {item.quantity === 1
                                            ? `${item.product.price} RON`
                                            : `${item.product.price} RON x ${item.quantity} items`}{" "}
                                </Col>
                                <Col
                                    md={3}
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }}
                                >
                                    <FontAwesomeIcon
                                        icon={faTrash}
                                        data-tip="Remove item from cart"
                                        className="deleteIcon"
                                        onClick={() => this.handleDeleteButton(item)}
                                    />
                                    <ReactTooltip />
                                </Col>
                            </Row>
                            <hr />
                        </>
                    );
                }),
            });
        }
    }

    componentDidMount() {
        this.calculateTotalPrice();
        this.setState({
            finishedPurchase: false,
            checkoutMapping: this.global.shoppingCart.map((item, i) => {
                return (
                    <>
                        <Row key={i}>
                            <Col
                                md={3}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                }}
                            >
                                <img
                                    src={item.product.thumbSrc}
                                    alt="product"
                                    width={60}
                                    height={60}
                                    style={{ paddingBottom: "2.33%" }}
                                />
                            </Col>
                            <Col
                                md={3}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    maxHeight: "100px",
                                    overflow: "auto",
                                    borderLeft:
                                        "1px solid rgba(135, 135, 135, 0.5)",
                                }}
                            >
                                {item.product.title}
                            </Col>
                            <Col
                                md={3}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                    {" "}
                                    {item.quantity === 1
                                        ? `${item.product.price} RON`
                                        : `${item.product.price} RON x ${item.quantity} items`}{" "}
                            </Col>
                            <Col
                                md={3}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    data-tip="Remove item from cart"
                                    className="deleteIcon"
                                    onClick={() => this.handleDeleteButton(item)}
                                />
                                <ReactTooltip />
                            </Col>
                        </Row>
                        <hr />
                    </>
                );
            }),
        });
    }

    render() {
        // The container below will be appended with <Row> components which hold checkout items
        return (
            <>
                <Container>
                    <br />
                    <br />
                    <br />
                    <Row>
                        <Col>
                            <h3> My Cart </h3>
                        </Col>
                    </Row>
                    <hr />
                    <br />
                    {this.state.checkoutMapping}
                    <br/>
                    <Row>
                        <Col style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center"
                            }}>
                                {this.showCheckoutButton()}
                        </Col>
                        <Col
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center"
                            }}
                        >
                            <h4>
                                {" "}
                                {this.state.checkoutMapping.length
                                    ? `TOTAL: ${this.state.currentCartTotal.toFixed(
                                          2
                                      )} RON`
                                    : (!this.state.finishedPurchase ? "Add items to your cart to see them here" : "Thank you ! Please complete the payment process in the newly opened tab.")}{" "}
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Cart;
