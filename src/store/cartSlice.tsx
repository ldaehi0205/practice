import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cartData",
  initialState: { value: [] },
  reducers: {
    saveToCart: (state: any, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { saveToCart } = cartSlice.actions;

export default cartSlice.reducer;
