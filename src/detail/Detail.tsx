import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { range } from "../main/MainPage";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import HeartBtn from "./components/HeartBtn";
import styled from "styled-components";

interface Detail {
  shoes: Array<any>;
}

function Detail({ shoes }: Detail) {
  const history = useHistory();
  const { id } = useParams<any>();
  const [alert, setalert] = useState(true);
  const ranges = useContext(range);

  useEffect(() => {
    let timer = setTimeout(() => {
      setalert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  console.log(ranges, "range");
  return (
    <Wrapper>
      {alert === true && <Modal>재고가 얼마 남지 않았습니다.</Modal>}
      <Item>
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              shoes[id].id + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <ItemInfo>
          <h4 className="pt-5">{shoes[id].title}</h4>
          <p>{shoes[id].content}</p>
          <p>{shoes[id].price}원</p>
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
            <button className="btnOrder">주문하기</button>
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

  /* button {
    height: 50px;
    background-color: #ffa600c6;
    border: none;
    border-radius: 7px;
    color: white;
    font-size: 18px;
  } */

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
