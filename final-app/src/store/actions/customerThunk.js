import { createAsyncThunk } from "@reduxjs/toolkit";
import { exchangeToken } from "../../commerce/customer";

export const createJWT = createAsyncThunk(
  "customer/createJWT",
  async ({ token }, thunkAPI) => {
    try {
      const data = await exchangeToken({ token });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error bas verdi");
    }
  }
);
