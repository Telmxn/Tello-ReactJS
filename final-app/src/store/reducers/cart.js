import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCart,
  updateCartItem,
  deleteItemFromCart,
  makeCart,
  // addItemToCartVariant,
} from "../actions/cartThunk";

const initialState = {
  cart: {},
  // submitCart: {
  //   cart: {},
  //   status: "nothing",
  //   error: "",
  // },
  status: "nothing",
  error: "",
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(makeCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(makeCart.fulfilled, (state, { payload }) => {
        state.cart = payload;
        state.status = "fulfilled";
      })
      .addCase(makeCart.rejected, (state, { payload }) => {
        state.status = "error";
        state.cart = {};
        state.error = payload;
      })
      .addCase(addItemToCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addItemToCart.fulfilled, (state, { payload }) => {
        state.cart = payload;
        state.status = "fulfilled";
      })
      .addCase(addItemToCart.rejected, (state, { payload }) => {
        state.status = "error";
        state.cart = {};
        state.error = payload;
      })
      // .addCase(addItemToCartVariant.pending, (state) => {
      //   state.status = "loading";
      // })
      // .addCase(addItemToCartVariant.fulfilled, (state, { payload }) => {
      //   state.status = "fulfilled";
      //   state.submitCart.cart = payload;
      // })
      // .addCase(addItemToCartVariant.rejected, (state, { payload }) => {
      //   state.status = "error";
      //   state.submitCart.cart = {};
      //   state.error = payload;
      // })
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
