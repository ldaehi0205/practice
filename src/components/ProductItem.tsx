import React, { useContext } from "react";
import styled from "styled-components";

interface ProductItem {
  title: string;
  price: string;
  image: string;
}

const ProductItem = ({ title, price, image }: ProductItem) => {
  return (
    <ShoesItem>
      <img src={image} width="100%" />
      <h4>{title}</h4>
      <p>{price}원</p>
    </ShoesItem>
  );
};

export default ProductItem;

const ShoesItem = styled.div`
  img {
    margin: 10px;
    width: 360px;
    height: 280px;
  }
`;
