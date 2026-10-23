import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/CounterSlices'

export const store = configureStore({
    reducer:{
        counter: counterReducer
    }
})