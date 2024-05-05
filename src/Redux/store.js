import { configureStore } from "@reduxjs/toolkit";
import addproductReducer from "./productDataSlice";
import logger from "redux-logger"; // Import Redux Logger

export const store = configureStore({
  reducer: {
    addproduct: addproductReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
