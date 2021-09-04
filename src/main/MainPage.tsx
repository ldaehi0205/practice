import React, { useRef, createContext } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveData } from "../store/dataSlice";
import ProductItem from "../components/ProductItem";
import axios from "axios";
import styled from "styled-components";
import { RootState } from "../store/store";

export const range = createContext<number[]>([]);

const MainPage = () => {
  const moreView = useRef(true);
  const dispatch = useDispatch();
  const productItems = useSelector((state: RootState) => state);
  const { value } = productItems.fakeData;

  const AddProductList = (item: Record<string, string>) => {
    dispatch(saveData(item));
  };

  const GetMainItem = () => {
    axios
      .get("/data/Data.json")
      .then(result => {
        moreView.current = false;
        result.data.forEach((element: Record<string, string>) => {
          AddProductList(element);
        });
      })
      .catch(error => console.log(error));
  };

  if (value.length > 6) {
    moreView.current = false;
  }
  return (
    <Wrapper>
      <ListBox>
        {value.map((e: Record<string, string>, i: number) => {
          const address = `/detail/${e.id}`;
          return (
            <Link to={address} key={i}>
              <ProductItem
                key={e.id}
                title={e.title}
                price={e.price}
                image={e.image}
              />
            </Link>
          );
        })}
      </ListBox>
      {moreView.current && (
        <Button>
          <button onClick={GetMainItem}>더보기</button>
        </Button>
      )}
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
