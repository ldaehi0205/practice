import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: [
    {
      id: number;
      title: string;
      content: string;
      price: number;
    }
  ];
}

const initialState: any = {
  value: [
    {
      id: "0",
      title: "White and Black",
      content: "Born in France",
      price: "120000",
    },

    {
      id: "1",
      title: "Red Knit",
      content: "Sorn in Seoul",
      price: "110000",
    },
    {
      id: "2",
      title: "Grey Yordan",
      content: "Born in the States",
      price: "130000",
    },
  ],
};

export const counterSlice = createSlice({
  name: "fakeData",
  initialState,
  reducers: {
    saveData: (state, action) => {
      state.value = [...state.value, action.payload];
    },
  },
});

export const { saveData } = counterSlice.actions;

export default counterSlice.reducer;
