import { createSlice } from "@reduxjs/toolkit";

const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItemIndex = state.findIndex(item => item.id === id);
      if (existingItemIndex !== -1) {
        state[existingItemIndex].quantity += quantity;
      } else {
        state.push({ id, quantity });
      }
    },
    deleteFromBag: (state, action) => {
      const itemId = action.payload;
      return state.filter(item => item.id !== itemId);
    },
    clearCart: () => [],
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.find(item => item.id === id);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    }
  }
});

export const bagSliceActions = bagSlice.actions;
export default bagSlice;
