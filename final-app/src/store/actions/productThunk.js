import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllProducts,
  fetchPageProducts,
  fetchSelectedProducts,
  fetchSearchedProducts,
} from "../../commerce/products";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, thunkAPI) => {
    try {
      const data = fetchAllProducts();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error bas verdi");
    }
  }
);

export const getPageProducts = createAsyncThunk(
  "products/getPageProducts",
  async ({ sortBy, sortOrder, category, page }, thunkAPI) => {
    try {
      const data = await fetchPageProducts({
        sortBy,
        sortOrder,
        category,
        page,
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error bas verdi");
    }
  }
);

export const getSelectedProducts = createAsyncThunk(
  "products/getSelectedProducts",
  async ({ order, category }, thunkAPI) => {
    try {
      const data = await fetchSelectedProducts({ order, category });
      return { order: order, category: category, data: data };
    } catch (error) {
      return thunkAPI.rejectWithValue("Error bas verdi");
    }
  }
);

export const getSearchedProducts = createAsyncThunk(
  "products/getSearchedProducts",
  async ({ query }, thunkAPI) => {
    try {
      const data = await fetchSearchedProducts({ query });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Error bas verdi");
    }
  }
);
