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
      <div className="WrapperImg">
        <img src={image} />
      </div>
      <h4>{title}</h4>
      <p>{price}원</p>
    </ShoesItem>
  );
};

export default ProductItem;

const ShoesItem = styled.div`
  .WrapperImg {
    overflow: hidden;
    margin: 10px;
    width: 360px;
    height: 280px;
  }

  img {
    width: 100%;
    height: 280px;
    transform: scale(1);
    transition: all 0.2s linear;

    :hover {
      transform: scale(1.1);
    }
  }
`;
