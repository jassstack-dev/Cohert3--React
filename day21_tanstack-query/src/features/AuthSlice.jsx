import { createSlice } from "@reduxjs/toolkit";

const AuthSlice  = createSlice({
    name:"auth",
    initialState:{
        user:null,
        isAuthenticated: false
    },
    reducers:{
        addUser : (state,action)=>{
            state.user = action.payload
            state.isAuthenticated = true
        },
        removeUser : ()=>{

            state.user  = null,
            state.isAuthenticated = false

        }
    }
})

export const {addUser, removeUser} = AuthSlice.actions
export default AuthSlice.reducer