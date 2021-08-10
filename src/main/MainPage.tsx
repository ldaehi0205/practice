import React, { useState, useEffect, useRef, createContext } from "react";
import { Link, Route } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveData } from "../store/dataSlice";
import Data from "../data";
import Detial from "../detail/Detail";
import ProductItem from "../components/ProductItem";
import axios from "axios";
import styled from "styled-components";

export const range = createContext<number[]>([]);

const MainPage = () => {
  const moreView = useRef(true);
  const dispatch = useDispatch();
  const productItems = useSelector((state: any) => state);
  const [stock, setstock] = useState([10, 11, 12]);
  const { value } = productItems.fakeData;

  const AddProductList = (item: any) => {
    dispatch(saveData(item));
  };

  const GetMainItem = () => {
    axios
      .get("https://codingapple1.github.io/shop/data2.json")
      .then(result => {
        moreView.current = false;
        result.data.forEach((element: any) => {
          AddProductList(element);
        });
      })
      .catch(error => console.log(error));
  };

  return (
    <Wrapper>
      <range.Provider value={stock}>
        <ListBox>
          {value.map((e: any, i: number) => {
            const address = `/detail/${e.id}`;
            return (
              <Link to={address} key={i}>
                <ProductItem key={e.id} id={e.id} shoes={e} />
              </Link>
            );
          })}
        </ListBox>
        {moreView.current && (
          <Button>
            <button onClick={GetMainItem}>더보기</button>
          </Button>
        )}
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 1080px;
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
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