import { createSlice } from "@reduxjs/toolkit";
import { getAllProducts, getSelectedProducts } from "../actions/productThunk";

const initialState = {
  products: {
    selectedProducts: [],
  },
  status: "nothing",
  error: "",
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getAllProducts.fulfilled, (state, { payload }) => {
        state.status = "fulfilled";
        state.products = payload;
      })
      .addCase(getAllProducts.rejected, (state, { payload }) => {
        state.status = "error";
        state.products = {};
        state.error = payload;
      })
      .addCase(getSelectedProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getSelectedProducts.fulfilled, (state, { payload }) => {
        state.status = "fulfilled";
        state.products.selectedProducts.push(payload);
      })
      .addCase(getSelectedProducts.rejected, (state, { payload }) => {
        state.status = "error";
        state.products = {};
        state.error = payload;
      });
  },
});

// export const {} = productSlice.actions;

export default productSlice.reducer;
