import React, { useState } from "react";
import { Navbar, Container, NavDropdown, Nav } from "react-bootstrap";
import Data from "./data";
import Detial from "./Detail";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [sheos, setsheos] = useState(Data);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/detail">Detail</Nav.Link>
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

      <Route exact path="/">
        <div className="container">
          <div className="row">
            {sheos.map(e => {
              const asd = `/detail/${e.id}`;
              return (
                <Link to={asd}>
                  <Card key={e.id} sheos={e} />
                </Link>
              );
            })}
          </div>
          <button
            onClick={() => {
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then(result => {
                  //result는 성공했을때 정보를 갖고잇음
                  const aaa = [...sheos, ...result.data];
                  setsheos(aaa);
                });
            }}
          >
            더보기
          </button>
        </div>
      </Route>

      <Route exact path="/detail/:id">
        <Detial sheos={sheos} />
      </Route>
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