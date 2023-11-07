import { createSlice } from "@reduxjs/toolkit";
import {postLike} from '../action/UserAction'
const initialState = {
    likeAndUnlike:{}
}

export const likePost = createSlice({
    name:"likeAndUnlike",
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            postLike.pending,(state)=>{
                state.loading = true
        })
        .addCase(
            postLike.fulfilled,(state,action)=>{
                state.loading = false
                state.likeAndUnlike = action.payload
        })
        .addCase(
            postLike.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
        })      
    }
})

export default likePost.reducer
