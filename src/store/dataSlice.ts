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
      title: "PINK NIKE",
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
      title: "Blue Sport Shoes",
      content: "Born in the States",
      price: "130000",
      count: "1",
    },
    {
      id: "3",
      image:
        "https://cdn.pixabay.com/photo/2016/11/19/18/06/feet-1840619__480.jpg",
      title: "nike white",
      content: "Born in korea",
      price: "170000",
      count: "1",
    },

    {
      id: "4",
      image:
        "https://cdn.pixabay.com/photo/2016/12/10/16/57/shoes-1897708__480.jpg",
      title: "Sneaker Black",
      content: "Sorn in Seoul",
      price: "100000",
      count: "1",
    },
    {
      id: "5",
      image:
        "https://cdn.pixabay.com/photo/2013/07/12/18/20/shoes-153310__480.png",
      title: "ConversL Sneaker",
      content: "Born in Busan",
      price: "80000",
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
