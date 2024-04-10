import { createSlice } from "@reduxjs/toolkit";
const initialState={
    profiles:[]
}


const userSlice=createSlice({
    name:"users",
    initialState,
    reducers:{
        registerUser:(state, action)=>{
            state.profiles.push(action.payload)
        }

    }

})

export const userSliceActions=userSlice.actions;
export default userSlice;