import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";

function Detail(props) {
  const history = useHistory();
  const { id } = useParams();
  const [alert, setalert] = useState(true);
  const [inputData, setinputData] = useState("");

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

  return (
    <div className="container">
      <div>
        <header>Detail</header>
      </div>

      <input
        onChange={e => {
          setinputData(e.target.value);
        }}
      />

      {alert === true && <div>재고가 얼마 남지 않았습니다.</div>}
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
