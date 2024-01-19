import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: 0,
  reducers: {
    increment: (state) => {
      return (state += 1);
    },
    decrement: (state) => {
      return (state -= 1);
    },
    add: (state, action) => {
      return (state += Number(action.payload));
    },
    subtract: (state, action) => {
      return (state -= Number(action.payload));
    },
  },
});

export default counterSlice;
export const counterAction = counterSlice.actions;
