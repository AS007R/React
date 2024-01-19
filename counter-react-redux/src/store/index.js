import { configureStore } from "@reduxjs/toolkit";
import privacySlice from "./privacy";
import counterSlice from "./counter";

const store = configureStore({
  reducer: {
    privacy: privacySlice.reducer,
    counter: counterSlice.reducer,
  },
});

export default store;
