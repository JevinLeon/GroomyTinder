import { configureStore } from "@reduxjs/toolkit";
import basketReducer from "./features/basketSlice";
import storeReducer from "./features/storeSlice";

export const store = configureStore({
  reducer: {
    basket: basketReducer,
    store: storeReducer,
  },
});
