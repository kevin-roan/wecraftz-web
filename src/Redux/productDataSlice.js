import { createSlice } from "@reduxjs/toolkit";

export const productDataSlice = createSlice({
  name: "productdata",
  initialState: {
    formDataList: [],
    stockDataList: [],
    isUploading: false,
    productData: [],
  },
  reducers: {
    addProductDetails: (state, action) => {
      // Push product details as the first object in formDataList
      state.formDataList.push(action.payload);
    },
    addStockDetails: (state, action) => {
      state.stockDataList.push(action.payload);
    },
    startUpload: (state) => {
      state.isUploading = true;
    },
    setData: (state, action) => {
      state.productData = { ...state.productData, ...action.payload };
    },
  },
});

export const {
  addProductDetails,
  addStockDetails,
  startUpload,
  setData,
  setImageUrl,
} = productDataSlice.actions;

export default productDataSlice.reducer;
