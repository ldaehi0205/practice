import { createSlice } from "@reduxjs/toolkit";

interface type {
  content: string;
  count: number;
  id: string;
  image: string;
  price: string;
}

export const cartSlice = createSlice({
  name: "cartData",
  initialState: { value: [] },
  reducers: {
    saveToCart: (state: any, action) => {
      state.value = [...state.value, action.payload];
    },
    changeCount: (state: any, action) => {
      state.value[action.payload.index].count =
        Number(state.value[action.payload.index].count) + action.payload.number;
    },
    removeItem: (state: any, action) => {
      state.value = state.value.filter(
        (item: { id: string | number }) => Number(item.id) !== action.payload
      );
    },
    removeAll: (state: any) => {
      state.value = [];
    },
  },
});

export const {
  saveToCart,
  changeCount,
  removeItem,
  removeAll,
} = cartSlice.actions;

export default cartSlice.reducer;
