import { createSlice } from "@reduxjs/toolkit";
import {UpdateProfile} from '../action/UserAction'

const initialState = {
    updateProfile:[]
}

export const updateProfile = createSlice({
    name:'updateProfile',
    initialState,
    extraReducers:builder=>{
        builder.addCase(UpdateProfile.pending,(state)=>{
            state.loading = true
        })
        .addCase(UpdateProfile.fulfilled,(state,action)=>{
            state.loading = false
            state.updateProfile = action.payload
        })
        .addCase(UpdateProfile.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default updateProfile.reducer