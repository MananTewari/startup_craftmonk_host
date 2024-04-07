import { createSlice } from "@reduxjs/toolkit";
const [orderPlaced, setOrderPlaced]=useState(false);_


const bagSlice = createSlice({
  name: "bag",
  initialState: [],
  reducers: {
    addToBag: (state, action) => {
      state.push(action.payload);
      console.log("state is", action.payload);
    },

    deleteFromBag: (state, action) => {
      return state.filter(itemId => itemId !== action.payload)
      // Array.splice(itemId, 1);
      // console.log(itemId);
    },
    clearCart: (state) => {
      return [];
    },
    orderCalculator: (state) => {
      //to reduce the avaiable items from backend

    },
    placeOrder: (state, action)=> {
    setOrderPlaced(!orderPlaced)      

}
    }
   
  }
);
export const bagSliceActions = bagSlice.actions;
export default bagSlice;
