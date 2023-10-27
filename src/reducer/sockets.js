import { createSlice } from "@reduxjs/toolkit";
import {setSocket} from '../action/UserAction'
const initialState={
    socket:[]
}

export const sockets = createSlice({
    name:'socket',
    initialState,
    extraReducers:builder=>{
        builder.addCase(
            setSocket.pending,(state)=>{
                state.loading = true
        })
        .addCase(
            setSocket.fulfilled,(state,action)=>{
                state.loading = false
                state.socket = action.payload
            }
        ).addCase(setSocket.rejected,(state,action)=>{
            state.loading = false
            state.error = action.payload
        })
    }
})

export default sockets.reducer

