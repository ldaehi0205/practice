import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { range } from "../main/MainPage";
import { saveToCart } from "../store/cartSlice";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HeartBtn from "./components/HeartBtn";
import styled from "styled-components";

function Detail() {
  const history = useHistory();
  const { id } = useParams<any>();
  const [alert, setAlert] = useState(false);
  const ranges = useContext(range);
  const productItems = useSelector((state: any) => state);
  const { value } = productItems.fakeData;

  const dispatch = useDispatch();

  useEffect(() => {
    productItems.cartData.value.forEach((e: any) => {
      if (e.id === id) {
        setAlert(true);
        let timer = setTimeout(() => {
          setAlert(false);
        }, 2000);
        return () => {
          clearTimeout(timer);
        };
      }
    });
  }, []);

  const AddCart = () => {
    let confirmCart: boolean = false;
    productItems.cartData.value.forEach((e: { id: any }) => {
      if (e.id === id) {
        confirmCart = true;
        window.alert("이미 장바구니에 있습니다");
        return;
      }
    });
    if (!confirmCart) {
      dispatch(saveToCart(value[Number(id)]));
      window.alert("장바구니에 저장되었습니다");
    }
  };

  return (
    <Wrapper>
      {alert === true && <Modal>재고가 얼마 남지 않았습니다.</Modal>}
      <Item>
        <div className="col-md-6">
          <img src={value[Number(id)].image} width="100%" />
        </div>
        <ItemInfo>
          <h4 className="pt-5">{value[Number(id)].title}</h4>
          <p>{value[Number(id)].content}</p>
          <p>{value[Number(id)].price}원</p>
          <ButtonContainer>
            <GoBackBtn
              className="btnGoback"
              onClick={() => {
                history.goBack();
              }}
            >
              <ArrowBackIcon />
            </GoBackBtn>
            <HeartBtn />
            <button className="btnOrder" onClick={AddCart}>
              주문하기
            </button>
          </ButtonContainer>
        </ItemInfo>
      </Item>
    </Wrapper>
  );
}

export default Detail;

const Wrapper = styled.div`
  width: 1080px;
  margin: 0 auto;
`;

const Item = styled.div`
  display: flex;
  justify-content: center;

  .btnOrder {
    height: 50px;
    background-color: #ffa600c6;
    border: none;
    border-radius: 7px;
    color: white;
    font-size: 18px;
    width: 70%;

    :hover {
      color: gray;
    }
  }
`;

const GoBackBtn = styled.button`
  width: 10%;
  color: #ffa600c6;
  background-color: white;
  border: 1px solid rgb(164, 164, 164);
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 50px;
  margin: 10px auto;
  border-radius: 10px;
  background-color: orange;
  color: white;
`;

const ItemInfo = styled.div`
  width: 100%;
`;
