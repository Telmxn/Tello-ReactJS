import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/products";

export const store = configureStore({
  reducer: {
    product: productSlice,
  },
});
