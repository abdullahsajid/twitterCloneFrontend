import { createSlice } from "@reduxjs/toolkit";
import {deletePost} from '../action/UserAction'

const initialState = {
    deletedPost:[]
}

export const deletedPosts = createSlice({
    name:'deletedPost',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            deletePost.pending,(state)=>{
                state.loading = true
        })
        .addCase(
            deletePost.fulfilled,(state,action)=>{
                state.loading = false
                state.deletedPost = action.payload
        })
        .addCase(
            deletePost.rejected,(state,action)=>{
                state.loading = false
                state.error = action.payload
        })
    }
})

export default deletedPosts.reducer