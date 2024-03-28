import { createSlice } from "@reduxjs/toolkit";


const bagSlice = createSlice({
  name:"bag",
  initialState:[],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
      console.log("state is", action.payload);
    },
    
    deleteFromBag:(state, action) => {
      return state.filter(itemId => itemId !== action.payload)
      // Array.splice(itemId, 1);
      // console.log(itemId);
    },
  }
});
export const bagSliceActions = bagSlice.actions;
export default bagSlice;
