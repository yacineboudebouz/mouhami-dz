import { configureStore } from "@reduxjs/toolkit";
import landingReducer from "../features/landing/landingSlice";
export const store = configureStore({
  reducer: {
    landing: landingReducer,
  },
});
