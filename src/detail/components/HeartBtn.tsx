import React, { useState, useEffect, useContext } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteSharpIcon from "@material-ui/icons/FavoriteSharp";
import { WishItemContext } from "../../context/WishItemContext";
import styled from "styled-components";

const HeartBtn = ({ value }: any) => {
  const [isHeart, setIsHeart] = useState<boolean>(false);
  const { wishList, AddWishList, RemoveWishList } = useContext(WishItemContext);

  useEffect(() => {
    Object.keys(wishList.current).includes(value.id) && setIsHeart(true);
  }, []);

  const HandleWishList = () => {
    !isHeart && AddWishList(value);
    isHeart && RemoveWishList(value);
    setIsHeart(!isHeart);
  };

  return (
    <Heart onClick={HandleWishList}>
      {isHeart ? <FavoriteSharpIcon /> : <FavoriteBorderIcon />}
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
