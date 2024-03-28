import { createSlice } from "@reduxjs/toolkit";
const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload; // Concatenate the new items with the existing state
 
    },
  },
});

export const itemAction = itemSlice.actions;

export default itemSlice;
