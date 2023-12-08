import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
  rate: 0,
};

export const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    changeIndex: (state, action) => {
      state.index = action.payload;
    },
    changeRate: (state, action) => {
      state.rate = action.payload;
    },
  },
});

export const id = (state) => state.landing.index;
export const rateIdx = (state) => state.landing.rate;
export const { changeIndex, changeRate } = landingSlice.actions;
export default landingSlice.reducer;
