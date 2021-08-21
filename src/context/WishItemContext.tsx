import React, { createContext, useRef } from "react";

export const WishItemContext = createContext<any>({});

const WishItemProvider = ({ children }: any) => {
  const wishList = useRef<any>({});

  const AddWishList = (item: any) => {
    const wishListId = item.id;
    wishList.current[wishListId] = item;
  };

  const RemoveWishList = (item: any) => {
    const wishListId = item.id;
    delete wishList.current.wishListId;
  };

  const initValue = {
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
