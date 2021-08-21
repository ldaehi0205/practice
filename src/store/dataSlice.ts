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
      image:
        "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      title: "White and Black",
      content: "Born in France",
      price: "120000",
      count: "1",
    },

    {
      id: "1",
      image:
        "https://images.unsplash.com/photo-1575537302964-96cd47c06b1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8c2hvZXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      title: "Red Knit",
      content: "Sorn in Seoul",
      price: "110000",
      count: "1",
    },
    {
      id: "2",
      image:
        "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fHNob2VzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
      title: "Grey Yordan",
      content: "Born in the States",
      price: "130000",
      count: "1",
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
