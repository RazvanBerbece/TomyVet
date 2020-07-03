import React from "reactn";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import ReactTooltip from "react-tooltip";

import "./cart.css";
import Button from "react-bootstrap/Button";

import Cookies from 'universal-cookie';
const cookies = new Cookies();

class Cart extends React.Component {
    constructor(props) {
        super(props);                  
        this.handleDeleteButton = this.handleDeleteButton.bind(this);   
        this.state = {      
            checkoutMapping: [],            
            currentCartTotal: 0.0,
            productsFromCookie: cookies.get('shoppingCart')                  
        };  
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
                                <p> {item.product.title} </p>
                            </Col>
                            <Col
                                md={3}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <h6 style={{ paddingBottom: "2.33%" }}>
                                    {" "}
                                    {item.quantity === 1
                                        ? `${item.product.price} RON`
                                        : `${item.product.price} RON x ${item.quantity} items`}{" "}
                                </h6>
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

    componentDidMount() {
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
                                <p> {item.product.title} </p>
                            </Col>
                            <Col
                                md={3}
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <h6 style={{ paddingBottom: "2.33%" }}>
                                    {" "}
                                    {item.quantity === 1
                                        ? `${item.product.price} RON`
                                        : `${item.product.price} RON x ${item.quantity} items`}{" "}
                                </h6>
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
                    <Row>
                        <Col style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center"
                            }}>
                                <Button className="checkoutButton">
                                    Checkout
                                </Button>
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
                                    : "Add items to your cart to see them here"}{" "}
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </>
        );
    }
}

export default Cart;
