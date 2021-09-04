import React, { useState, createContext, useRef } from "react";
export const WishItemContext = createContext<any>({});

interface initType {
  wishListLength: number;
  wishList: wishList[];
  AddWishList: (item: wishList) => void;
  RemoveWishList: (item: Record<string, string>) => void;
}

interface wishList {
  content: string;
  count: string;
  id: string;
  image: string;
  price: string;
}

const WishItemProvider = ({ children }: { children: React.ReactNode }) => {
  const wishList = useRef<wishList[]>([]);
  const [wishListLength, setWishListLength] = useState(0);
  const AddWishList = (item: wishList) => {
    const wishListId = Number(item.id);
    wishList.current[wishListId] = item;
    setWishListLength(Object.keys(wishList.current).length);
  };

  const RemoveWishList = (item: Record<string, string>) => {
    const wishListId = Number(item.id);
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
