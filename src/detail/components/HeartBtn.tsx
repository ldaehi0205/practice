import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import styled from "styled-components";

const HeartBtn = () => {
  const [isHeart, setIsHeart] = useState<boolean>(false);

  return (
    <Heart onClick={() => setIsHeart(!isHeart)}>
      {!isHeart ? <FavoriteSharpIcon /> : <FavoriteBorderIcon />}
    </Heart>
  );
};

export default HeartBtn;

const Heart = styled.button`
  width: 10%;
  height: 50px;
  color: #ffa600c6;
  background-color: white;
  font-size: 18px;
  border-radius: 7px;
  border: 1px solid rgb(164, 164, 164);
`;
