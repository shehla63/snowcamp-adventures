import { createSlice } from "@reduxjs/toolkit";

export const authSlice=createSlice({
    name:"auth",
    initialState:{
        token:undefined,
        user:undefined,
    },
    reducers:{
        login:(state,{payload})=>{
            state.token=payload.token
            state.user=payload.user
        },
        logout:(state)=>{
            state.token=undefined,
            state.user=undefined
        }
    }
})
export const {login,logout}=authSlice.actions