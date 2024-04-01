import { configureStore, combineReducers } from "@reduxjs/toolkit";


import bagSlice from "./bagSlice";
import itemSlice from "./itemSlice";
import fetchStatusSlice from "./fetchStatus";
import authSlice from "./authSlice";


const rootReducer = combineReducers({
  items: itemSlice.reducer,
  fetchStatus:fetchStatusSlice.reducer,
  bag:bagSlice.reducer,
  auth:authSlice.reducer,
   // Here you must provide the reducer for fetchStatus
});
<itemSlice/>

const craftmonkStore = configureStore({
  reducer: rootReducer
});

export default craftmonkStore;
