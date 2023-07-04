import { createSlice } from "@reduxjs/toolkit";
import { createJWT } from "../actions/customerThunk";

const initialState = {
  customerId: "",
  token: "",
  status: "nothing",
  error: "",
};

export const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createJWT.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createJWT.fulfilled, (state, { payload }) => {
        state.customerId = payload.customer_id;
        state.token = payload.jwt;
        state.status = "fulfilled";
        state.error = "";
      })
      .addCase(createJWT.rejected, (state, { payload }) => {
        state.customerId = "";
        state.token = "";
        state.status = "error";
        state.error = payload;
      });
  },
});

export default customerSlice.reducer;
