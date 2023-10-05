import { createSlice } from "@reduxjs/toolkit";
import {getRecommendedUser} from '../action/UserAction'
const initialState = {
    recommendedUser:[]
}

export const recommended = createSlice({
    name:'recommendedUser',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            getRecommendedUser.pending,(state)=>{
                state.loading = true
        })
        .addCase(
            getRecommendedUser.fulfilled,(state,action)=>{
                state.loading = false
                state.recommendedUser = action.payload
        })
        .addCase(
            getRecommendedUser.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
            }
        )
    }
})

export default recommended.reducer