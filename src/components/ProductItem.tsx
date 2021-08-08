import React, { useContext } from "react";
import styled from "styled-components";

interface ProductItem {
  id: number;
  shoes: any;
}

const ProductItem = ({ id, shoes }: ProductItem) => {
  return (
    <ShoesItem>
      <img
        src={`https://codingapple1.github.io/shop/shoes${id + 1}.jpg`}
        width="100%"
      />
      <h4>{shoes.content}</h4>
      <p>{shoes.price}</p>
    </ShoesItem>
  );
};

export default ProductItem;

const ShoesItem = styled.div`
  img {
    width: 360px;
    height: 280px;
  }
`;
