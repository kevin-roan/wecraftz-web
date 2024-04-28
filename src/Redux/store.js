import { configureStore } from "@reduxjs/toolkit";
import addproductReducer from "./productDataSlice";

export const store = configureStore({
  reducer: {
    addproduct: addproductReducer,
  },
});
