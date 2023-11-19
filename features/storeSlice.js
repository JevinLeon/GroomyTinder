import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  store: {
    id: null,
    imgUrl: null,
    title: null,
    distance: null,
    rating: null,
    description: null,
    items: null,
    type: null,
  },
};

export const storeSlice = createSlice({
  name: "store",
  initialState,
  reducers: {
    setStore: (state, action) => {
      state.store = action.payload;
    },
  },
});

export const { setStore } = storeSlice.actions;

export const selectStore = (state) => state.store.store;

export default storeSlice.reducer;
