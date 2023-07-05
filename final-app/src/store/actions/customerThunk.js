import { createAsyncThunk } from "@reduxjs/toolkit";
import { createCustomer, exchangeToken } from "../../commerce/customer";

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

export const registerCustomer = createAsyncThunk(
  "customer/registerCustomer",
  async ({ email, phone, firstname, lastname }, thunkAPI) => {
    try {
      const data = await createCustomer({ email, phone, firstname, lastname });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error bas verdi");
    }
  }
);
