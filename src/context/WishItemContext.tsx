import React, { useState, createContext, useRef } from "react";

export const WishItemContext = createContext<any>({});

const WishItemProvider = ({ children }: any) => {
  const wishList = useRef<any>({});
  const [wishListLength, setWishListLength] = useState(0);

  const AddWishList = (item: any) => {
    const wishListId = item.id;
    wishList.current[wishListId] = item;
    setWishListLength(Object.keys(wishList.current).length);
  };

  const RemoveWishList = (item: any) => {
    const wishListId = item.id;
    delete wishList.current[wishListId];
    setWishListLength(Object.keys(wishList.current).length);
  };

  const initValue = {
    wishListLength,
    wishList,
    AddWishList,
    RemoveWishList,
  };

  return (
    <WishItemContext.Provider value={initValue}>
      {children}
    </WishItemContext.Provider>
  );
};

export default WishItemProvider;
