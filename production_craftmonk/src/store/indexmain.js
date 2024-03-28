import { configureStore, combineReducers } from "@reduxjs/toolkit";

import fetchStatusSlice from "./fetchStatus";
import bagSlice from "./bagSlice";
import itemSlice from "./itemSlice";

const rootReducer = combineReducers({
  item: itemSlice.reducer,
  fetchStatus: fetchStatusSlice.reducer,
  bag:bagSlice.reducer, // Here you must provide the reducer for fetchStatus
});
<itemSlice/>

const craftmonkStore = configureStore({
  reducer: rootReducer
});

export default craftmonkStore;
