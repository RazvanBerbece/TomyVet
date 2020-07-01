import React from "react";
import {
  NavLink,
} from "react-router-dom";
import pawLogo from "./assets/img/paw.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function NavbarCustom() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Navbar.Brand href="#home" as={NavLink} to="/intro">
          <img
            alt="logo"
            src={pawLogo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          TomyVet
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={NavLink} to="/intro">Home</Nav.Link>
            <NavDropdown title="Shop" id="collasible-nav-dropdown">
              <NavDropdown.Item as={NavLink} to="/allitems">All Items</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Class 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Class 2</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Class 3</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Class 4</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Newest Added
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Newest Deals
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={NavLink} to="/aboutus">About Us</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavbarCustom;