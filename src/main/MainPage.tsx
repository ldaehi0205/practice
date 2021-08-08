import React, { useState, useContext, useRef, createContext } from "react";
import styled from "styled-components";
import { Link, Route } from "react-router-dom";
import Data from "../data";
import Detial from "../detail/Detail";
import ProductItem from "../components/ProductItem";
import axios from "axios";

export const range = createContext<number[]>([]);

const MainPage = () => {
  const [shoes, setshoes] = useState(Data);
  const [stock, setstock] = useState([10, 11, 12]);

  return (
    <Wrapper>
      <range.Provider value={stock}>
        <Route exact path="/">
          <ListBox>
            {shoes.map(e => {
              const address = `/detail/${e.id}`;
              return (
                <Link to={address}>
                  <ProductItem key={e.id} id={e.id} shoes={e} />
                </Link>
              );
            })}
          </ListBox>
          <Button>
            <button
              onClick={() => {
                axios
                  .get("https://codingapple1.github.io/shop/data2.json")
                  .then(result => {
                    const newShoesArray = [...shoes, ...result.data];
                    newShoesArray[newShoesArray.length - 1].id !==
                      shoes[shoes.length - 1].id && setshoes(newShoesArray);
                  })
                  .catch(error => console.log(error));
              }}
            >
              더보기
            </button>
          </Button>
        </Route>
        <Route exact path="/detail/:id">
          <Detial shoes={shoes} />
        </Route>
      </range.Provider>
    </Wrapper>
  );
};

export default MainPage;

const Wrapper = styled.div`
  width: 100%;
  padding: 10px 100px;
`;

const ListBox = styled.div`
  /* display: flex; */
  /* justify-content: center; */
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1080px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  /* flex-wrap: wrap; */
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;

  button {
    width: 80px;
    height: 30px;
    border-radius: 5px;
    border: none;
    background-color: #ffa600c6;
    color: white;
  }
`;
