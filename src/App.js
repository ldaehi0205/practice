import React, { useState, useContext, useRef, createContext } from "react";
import Data from "./data";
import Detial from "./Detail";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import axios from "axios";

export const range = createContext();

function App() {
  const [sheos, setsheos] = useState(Data);
  const [stock, setstock] = useState([10, 11, 12]);
  const row = useRef(null);

  return (
    <Screen>
      <NavBar />
      <Route exact path="/">
        <ListBox>
          <ContainerItem>
            <range.Provider value={stock}>
              <div className="row" ref={row}>
                {sheos.map(e => {
                  const address = `/detail/${e.id}`;
                  return (
                    <Link to={address}>
                      <Card key={e.id} id={e.id} sheos={e} />
                    </Link>
                  );
                })}
              </div>
            </range.Provider>
          </ContainerItem>
        </ListBox>

        <Button>
          <button
            onClick={() => {
              axios
                .get("https://codingapple1.github.io/shop/data2.json")
                .then(result => {
                  //result는 성공했을때 정보를 갖고잇음
                  const aaa = [...sheos, ...result.data];
                  aaa[aaa.length - 1].id !== sheos[sheos.length - 1].id &&
                    setsheos(aaa);
                });
            }}
          >
            더보기
          </button>
        </Button>
      </Route>
      <range.Provider value={stock}>
        <Route exact path="/detail/:id">
          <Detial sheos={sheos} />
        </Route>
      </range.Provider>
    </Screen>
  );
}

function Card(props) {
  const stock = useContext(range);
  console.log("stock", stock);
  return (
    <ShoesItem>
      <img
        src={`https://codingapple1.github.io/shop/shoes${
          props.sheos.id + 1
        }.jpg`}
        widwh="100%"
      />
      <h4>{props.sheos.content}</h4>
      <p>{props.sheos.price}</p>
    </ShoesItem>
  );
}

export default App;

const Screen = styled.div`
  width: 100%;
  padding: 10px 100px;
`;

const ListBox = styled.div`
  display: flex;
  justify-content: center;
`;

const ContainerItem = styled.div`
  width: 1300px;
`;

const ShoesItem = styled.div`
  img {
    width: 420px;
    height: 350px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    background-color: orange;
    color: white;
    outline-color: orange;
    border: none;

    :hover {
      color: gray;
    }
  }
`;
