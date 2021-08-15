import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Item from "./components/Item";

const Cart = () => {
  const productItems = useSelector((state: any) => state);
  const cartLength = productItems.cartData.value.length;
  console.log(productItems.cartData.value.length, "productItems");

  return (
    <Wrapper>
      <>
        <ItemList>
          <ItemListHeader>
            <ItemListHeader_selector>전체선택</ItemListHeader_selector>
            <ItemListHeader_delete>전체삭제</ItemListHeader_delete>
          </ItemListHeader>
          {!cartLength ? (
            <EmptyCart>
              <p>장바구니에 담긴 상품이 없습니다</p>
            </EmptyCart>
          ) : (
            <ItemCart>
              <Item />
            </ItemCart>
          )}
        </ItemList>
        <PriceInfo>
          <PriceInfo_price>
            <dl>
              <dt>상품금액</dt>
              <dd>1</dd>
            </dl>
            <dl>
              <dt>배송금액</dt>
              <dd>1</dd>
            </dl>
            <dl>
              <dt>결제금액</dt>
              <dd>1</dd>
            </dl>
          </PriceInfo_price>
          <BuyToButton>상품을 담아주세요</BuyToButton>
        </PriceInfo>
      </>
    </Wrapper>
  );
};

export default Cart;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 100px;
  margin-top: 40px;
`;

const ItemList = styled.div`
  width: 600px;
  margin-right: 20px;
  font-size: 14px;
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin-top: 60px;
  width: 400px;
`;

const ItemListHeader = styled.div`
  display: flex;
  padding: 15px 0px;
  border-bottom: 2px solid black;
`;

const ItemListHeader_selector = styled.span`
  padding: 0px 20px;
  border-right: 1px solid gray;
`;

const ItemListHeader_delete = styled.span`
  padding: 0px 20px;
`;

const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  border-bottom: 1px solid gray;
`;

const PriceInfo_price = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 50px;
  background-color: rgba(210, 210, 210, 0.36);
  border-radius: 10px;

  dl:nth-child(2) {
    border-bottom: 1px solid gray;
    padding-bottom: 10px;
  }

  dl {
    display: flex;
    justify-content: space-between;
    margin: 10px 0px;
  }
`;

const BuyToButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #959595;
  color: white;
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  border: none;
  height: 50px;
`;

const ItemCart = styled.div``;
