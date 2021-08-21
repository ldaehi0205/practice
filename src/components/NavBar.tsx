import React, { useContext } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { WishItemContext } from "../context/WishItemContext";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";

const NavBar = () => {
  const { wishListLength } = useContext(WishItemContext);

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
        <NavLink to="/wishlist">
          <IconButton aria-label="cart">
            <StyledBadge badgeContent={wishListLength} color="secondary">
              <ShoppingCartIcon />
            </StyledBadge>
          </IconButton>
        </NavLink>
      </Container>
    </Navbar>
  );
};

export default NavBar;

const HomeButton = styled.div`
  font-size: 20px;
`;

const StyledBadge = withStyles(theme => ({
  badge: {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}))(Badge);
