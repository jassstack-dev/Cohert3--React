import { configureStore } from "@reduxjs/toolkit";
import counterReducer from '../features/CouterSlice'
import authReducer from '../features/AuthSlice'

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        auth: authReducer
    }
})