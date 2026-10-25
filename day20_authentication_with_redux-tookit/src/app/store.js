import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/CouterSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer
    }
})