import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useSelector } from "react-redux";

import dataSlice from "./dataSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: { fakeData: dataSlice, cartData: cartSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
// type을 스토어에서 지정 후 import해서 사용
