import { createSlice } from "@reduxjs/toolkit";

export const productDataSlice = createSlice({
  name: "productdata",
  initialState: {
    formDataList: [],
  },
  reducers: {
    addProductDetails: (state, action) => {
      state.formDataList.push(action.payload);
    },
  },
});

export default formDataSlice.reducer;
