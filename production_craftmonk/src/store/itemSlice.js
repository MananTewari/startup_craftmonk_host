import { createSlice } from "@reduxjs/toolkit";

const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload; // Return new state instead of mutating existing state
    },
  },
});

export const { addInitialItems } = itemSlice.actions;

export default itemSlice.reducer;
