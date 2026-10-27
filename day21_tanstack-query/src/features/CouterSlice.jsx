import { createSlice } from "@reduxjs/toolkit";

const CounterSlice = createSlice({
    name: 'count',
    initialState:{
        count : 0
    },
    reducers:{
        increment: (state, action) => {
            state.count++
        },
        decrement: (state, action)=>{
            state.count --
        },
        incrementByNum :(state, action)=>{
            state.count += action.payload
        }
    }
})

export const {increment,decrement, incrementByNum} = CounterSlice.actions

export default CounterSlice.reducer