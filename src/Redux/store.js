import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import indexReducer from "./counterSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    index: indexReducer,
  },
});
