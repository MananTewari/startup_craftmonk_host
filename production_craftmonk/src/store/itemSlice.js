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
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.find((item) => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    }
  },
});

export const itemAction = itemSlice.actions;

export default itemSlice;
