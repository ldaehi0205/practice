import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeCount, removeItem } from "../../store/cartSlice";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import styled from "styled-components";

interface itemType {
  image: string | undefined;
  content: React.ReactNode;
  price: React.ReactNode;
  index: number;
  id: number;
}

const Item = ({ image, content, price, index, id }: itemType) => {
  const productItems = useSelector((state: any) => state);
  const dispatch = useDispatch();

  const countItemNumber = (number: number) => {
    if (Number(productItems.cartData.value[index].count) < 2 && number === -1)
      return;
    dispatch(changeCount({ index: index, number: number }));
  };

  const removeCart = (number: number) => {
    dispatch(removeItem(number));
  };
  return (
    <>
      <Wrapper>
        <ItemInfoLeft>
          <img src={image} />
          <span>{content}</span>
        </ItemInfoLeft>
        <ItemInfoRight>
          <span>
            {Number(price) * Number(productItems.cartData.value[index].count)}
          </span>
          <button onClick={() => countItemNumber(1)}>➕</button>
          <button disabled>
            {Number(productItems.cartData.value[index].count)}
          </button>
          <button onClick={() => countItemNumber(-1)}>➖</button>
          <button onClick={() => removeCart(id)}>
            <DeleteForeverIcon />
          </button>
        </ItemInfoRight>
      </Wrapper>
    </>
  );
};

export default React.memo(Item);

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
  button:nth-child(5) {
    width: 30px;
    background-color: white;
    margin: 0px 10px 5px;
    color: black;
  }

  button {
    border: none;
  }

  span {
    margin-right: 20px;
  }
`;
