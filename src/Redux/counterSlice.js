import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    indexReducer: (state, action) => {
      console.log(action.payload, "value of index");
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, indexReducer, incrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
