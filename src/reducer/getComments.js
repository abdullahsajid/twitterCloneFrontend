import { createSlice } from "@reduxjs/toolkit";
import {getComments} from '../action/UserAction'

const initialState = {
    Comment:[]
}

export const comment = createSlice({
    name:"Comment",
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            getComments.pending,(state)=>{
                state.loading = true
            }
        )
        .addCase(
            getComments.fulfilled,(state,action)=>{
                state.loading = false
                state.Comment = action.payload
            }
        )
        .addCase(
            getComments.rejected,(state,action)=>{
                state.loading = false
                action.error = action.payload
            }
        )
    }
})

export default comment.reducer