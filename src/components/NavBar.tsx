import React from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { Route, Link, NavLink } from "react-router-dom";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink to="/">
          <HomeButton>
            <strong>Shoes Market</strong>
          </HomeButton>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavLink to="/" style={{ margin: "10px" }}>
            Home
          </NavLink>
          <NavLink to="/cart">Cart</NavLink>
          <Nav className="me-auto">
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;

const HomeButton = styled.div`
  font-size: 20px;
`;
