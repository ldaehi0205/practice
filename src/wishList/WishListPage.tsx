import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { WishItemContext } from "../context/WishItemContext";
import { useSelector } from "react-redux";
import styled from "styled-components";

const WishListPage = () => {
  const { wishList, wishListLength } = useContext(WishItemContext);
  const cartItem = useSelector((state: any) => state.cartData);
  const cartItemArray = cartItem.value.map((e: any) => {
    return e.id;
  });

  return (
    <Wrapper>
      <ItemList>
        {wishListLength > 0 ? (
          <WishTable>
            <thead>
              <tr>
                <th>이미지</th>
                <th>상품명</th>
                <th>가격</th>
                <th>장바구니 보유</th>
              </tr>
            </thead>
            <tbody>
              {Object.values(wishList.current).map((obj: any, i: number) => {
                return (
                  <tr key={i} style={{ borderBottom: "1px solid gray" }}>
                    <td>
                      <Link to={`/detail/${obj.id}`}>
                        <img src={obj.image} width="70px" height="80px" />
                      </Link>
                    </td>
                    <td>
                      <Link to={`/detail/${obj.id}`}>{obj.title} </Link>
                    </td>
                    <td>{obj.price}</td>
                    {cartItemArray.includes(obj.id) ? (
                      <td>⭕️</td>
                    ) : (
                      <td>❌</td>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </WishTable>
        ) : (
          <EmptyCart>
            <p>찜목록에 담긴 상품이 없습니다</p>
          </EmptyCart>
        )}
      </ItemList>
    </Wrapper>
  );
};

export default WishListPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 100px;
  margin-top: 40px;
`;

const ItemList = styled.div`
  width: 800px;
  margin-right: 20px;
  font-size: 14px;
`;

const EmptyCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 500px;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

const WishTable = styled.table`
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
  text-align: center;

  thead {
    width: 100%;
    height: 40px;
    background-color: #ffa600b0;
    color: #fff;
    font-size: 18px;
  }
  thead th:nth-child(1) {
    width: 200px;
  }
  thead th:nth-child(2) {
    width: 200px;
  }
  thead th:nth-child(3) {
    width: 400px;
  }
  thead th:nth-child(4) {
    width: 200px;
  }
  tbody {
    font-size: 18px;

    img {
      padding: 10px;
    }
  }
`;
