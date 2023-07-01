import { createSlice } from "@reduxjs/toolkit";
import {
  getCart,
  addItemToCart,
  updateCartItem,
  deleteItemFromCart,
} from "../actions/cartThunk";

const initialState = {
  cart: {},
  status: "nothing",
  error: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCart.fulfilled, (state, { payload }) => {
        state.status = "fulfilled";
        state.cart = payload;
      })
      .addCase(getCart.rejected, (state, { payload }) => {
        state.status = "error";
        state.cart = {};
        state.error = payload;
      })
      .addCase(addItemToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addItemToCart.fulfilled, (state, { payload }) => {
        state.status = "fulfilled";
        state.cart = payload;
      })
      .addCase(addItemToCart.rejected, (state, { payload }) => {
        state.status = "error";
        state.cart = {};
        state.error = payload;
      })
      .addCase(updateCartItem.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartItem.fulfilled, (state, { payload }) => {
        state.status = "fulfilled";
        state.cart = payload;
      })
      .addCase(updateCartItem.rejected, (state, { payload }) => {
        state.status = "error";
        state.cart = {};
        state.error = payload;
      })
      .addCase(deleteItemFromCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteItemFromCart.fulfilled, (state, { payload }) => {
        state.status = "fulfilled";
        state.cart = payload;
      })
      .addCase(deleteItemFromCart.rejected, (state, { payload }) => {
        state.status = "error";
        state.cart = {};
        state.error = payload;
      });
  },
});

export default cartSlice.reducer;
