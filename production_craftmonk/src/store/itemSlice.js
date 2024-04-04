import { createSlice } from "@reduxjs/toolkit";
const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload; // Concatenate the new items with the existing state
 
    },
    sortItemsByLowPrice:(state, action)=>{
      state.sort((a,b)=>a.current_price-b.current_price);
    },
    sortItemsByHighPrice:(state, action)=>{
      state.sort((a,b)=>b.current_price-a.current_price);
    }
  },
});

export const itemAction = itemSlice.actions;

export default itemSlice;
