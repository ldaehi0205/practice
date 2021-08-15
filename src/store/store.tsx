import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "./dataSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: { fakeData: dataSlice, cartData: cartSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
