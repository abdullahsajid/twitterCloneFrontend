import { createSlice } from "@reduxjs/toolkit";
import {ViewProfile} from '../action/UserAction'
const initialState={
    viewUser:[]
}
export const viewProfile = createSlice({
    name:"viewUser",
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            ViewProfile.pending,(state)=>{
                state.loading = true
            }
        ).addCase(
            ViewProfile.fulfilled,(state,action)=>{
                state.loading = false
                state.viewUser = action.payload
            }
        )
        .addCase(
            ViewProfile.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default viewProfile.reducer
