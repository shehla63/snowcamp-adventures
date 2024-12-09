import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth.slice";
import exp from "constants";

const rootReducer=combineReducers({
    [authSlice.name]:authSlice.reducer
})
export const store = configureStore({
    reducer:rootReducer
})