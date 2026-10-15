import { createSlice } from "@reduxjs/toolkit";

export const Countslicer=createSlice({
    name:"counter",

    initialState:{
        value:0
    },
    reducers:{
        increment:(state)=>{
            state.value++
        },
        decrement:(state)=>{
            state.value--
        },
        custom:(state,action)=>{
            state.value+=action.payload
        }
    }
})

export const {increment,decrement,custom}=Countslicer.actions
export default Countslicer.reducer
