import React, { useState, useEffect, useContext } from "react";
import { useHistory, useParams } from "react-router-dom";
import { range } from "./App";
import styled from "styled-components";

function Detail(props) {
  const history = useHistory();
  const { id } = useParams();
  const [alert, setalert] = useState(true);
  const ranges = useContext(range);
  // const [inputData, setinputData] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => {
      setalert(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  // const product = props.sheos.find(() => {
  //   {
  //     return product.id === id;
  //   }
  // });
  console.log(ranges);
  return (
    <div className="container">
      {/* <input
        onChange={e => {
          setinputData(e.target.value);
        }}
      /> */}

      {alert === true && <Modal>재고가 얼마 남지 않았습니다.</Modal>}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              props.sheos[id].id + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.sheos[id].title}</h4>
          <p>{props.sheos[id].content}</p>
          <p>{props.sheos[id].price}</p>
          <div>{ranges}1231</div>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;

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
