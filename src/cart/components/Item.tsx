import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";

const Item = () => {
  const productItems = useSelector((state: any) => state);

  return (
    <>
      {productItems.cartData.value.map(
        (
          e: {
            image: string | undefined;
            content: React.ReactNode;
            price: React.ReactNode;
          },
          i: number
        ) => {
          return (
            <Wrapper key={i}>
              <ItemInfoLeft>
                <img src={e.image} />
                <span>{e.content}</span>
              </ItemInfoLeft>
              <ItemInfoRight>
                <span>{e.price}</span>
                <button>➕</button>
                <button disabled>1</button>
                <button>➖</button>
              </ItemInfoRight>
            </Wrapper>
          );
        }
      )}
    </>
  );
};

export default Item;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  padding: 10px 30px;
  border-bottom: 1px solid #d0c8c8;
`;

const ItemInfoLeft = styled.div`
  img {
    width: 40px;
    height: 100%;
    margin-right: 20px;
  }
`;
const ItemInfoRight = styled.div`
  align-self: center;

  button:nth-child(3) {
    width: 30px;
    color: black;
  }

  button {
    border: none;
  }

  span {
    margin-right: 20px;
  }
`;
