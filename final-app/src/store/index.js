import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./reducers/products";
import categorySlice from "./reducers/categories";
import searchHistorySlice from "./reducers/searchHistory";
import { persistStore, persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartSlice from "./reducers/cart";

const persistConfig = {
  key: "root",
  storage,
};

const searchHistory = persistReducer(persistConfig, searchHistorySlice);
const cart = persistReducer(persistConfig, cartSlice);

export const store = configureStore({
  reducer: {
    product: productSlice,
    category: categorySlice,
    cart: cart,
    searchHistory: searchHistory,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [PERSIST],
      },
    }),
});

export const persistor = persistStore(store);
