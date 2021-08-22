import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeAll } from "./../store/cartSlice";
import styled from "styled-components";
import Item from "./components/Item";

const Cart = () => {
  const productItems = useSelector((state: any) => state);
  const dispatch = useDispatch();
  const cartLength = productItems.cartData.value.length;
  let total: any = [];
  let totalprice;

  const removeAllCart = () => {
    dispatch(removeAll());
  };

  if (cartLength > 0) {
    total = productItems.cartData.value.map((e: any) => {
      return e.price * e.count;
    });
  }
  if (total.length > 0) {
    totalprice = total.reduce((a: number, b: number) => a + b);
  }
  return (
    <Wrapper>
      <>
        <ItemList>
          <ItemListHeader>
            <ItemListHeader_selector>전체선택</ItemListHeader_selector>
            <ItemListHeader_delete onClick={removeAllCart}>
              전체삭제
            </ItemListHeader_delete>
          </ItemListHeader>
          {!cartLength ? (
            <EmptyCart>
              <p>장바구니에 담긴 상품이 없습니다</p>
            </EmptyCart>
          ) : (
            <ItemCart>
              {productItems.cartData.value.map(
                (
                  e: {
                    image: string | undefined;
                    title: React.ReactNode;
                    price: React.ReactNode;
                    id: number;
                  },
                  i: number
                ) => {
                  return (
                    <Item
                      key={i}
                      index={i}
                      id={Number(e.id)}
                      image={e.image}
                      content={e.title}
                      price={e.price}
                    />
                  );
                }
              )}
            </ItemCart>
          )}
        </ItemList>
        <PriceInfo>
          <PriceInfo_price>
            <dl>
              <dt>주문금액</dt>
              {totalprice ? <dd>{totalprice}</dd> : <dd>{0}</dd>}
            </dl>
            <dl>
              <dt>배송금액</dt>
              {totalprice < 500000 ? <dd>{3000}</dd> : <dd>{0}</dd>}
            </dl>
            <dl>
              <dt>결제금액</dt>
              {totalprice ? (
                <dd>{totalprice < 500000 ? totalprice - 3000 : totalprice}</dd>
              ) : (
                <dd>{0}</dd>
              )}
            </dl>
          </PriceInfo_price>
          {total.length > 0 ? (
            <BuyToButton>결제 확인</BuyToButton>
          ) : (
            <BuyToEmpty>상품을 담아주세요</BuyToEmpty>
          )}
        </PriceInfo>
      </>
    </Wrapper>
  );
};

export default React.memo(Cart);

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
  cursor: pointer;

  :hover {
    color: rgb(104, 104, 104);
  }
`;

const ItemListHeader_delete = styled.span`
  padding: 0px 20px;
  cursor: pointer;

  :hover {
    color: rgb(104, 104, 104);
  }
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

const BuyToEmpty = styled.button`
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

const BuyToButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: orange;
  color: white;
  width: 100%;
  margin-top: 20px;
  border-radius: 10px;
  border: none;
  height: 50px;

  :hover {
    color: #52525253;
  }
`;
