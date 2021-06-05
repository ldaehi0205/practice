import React, { useState } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import Data from "./data";
import styled from "styled-components";

function App() {
  const [sheos, setsheos] = useState(Data);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container">
        <div className="row">
          {sheos.map(e => {
            return <Card key={e.id} sheos={e} />;
          })}
        </div>
      </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="col-me-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${
          props.sheos.id + 1
        }.jpg`}
        widwh="100%"
      />
      <h4>{props.sheos.content}</h4>
      <p>{props.sheos.price}</p>
    </div>
  );
}

export default App;
