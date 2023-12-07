import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  index: 0,
};

export const landingSlice = createSlice({
  name: "landing",
  initialState,
  reducers: {
    changeIndex: (state, action) => {
      state.index = action.payload;
    },
  },
});

export const id = (state) => state.landing.index;
export const { changeIndex } = landingSlice.actions;
export default landingSlice.reducer;
