import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { api } from "../../../config/api";

export const loginUserAction = createAsyncThunk(
  "auth/login",
  async (credentials, thunkApi) => {
    try {
      console.log("redux thunk action......");
      const res = await api.post("auth/login", credentials);
      localStorage.setItem("accessToken", res.data.accessToken);
      toast.success("user logged in");
      return res.data;
    } catch (error) {
      toast.error("loggin failed");
      return thunkApi.rejectWithValue("login failed");
    }
  },
);


export const hydrateUserAction = createAsyncThunk('auth/hydrate', async (_, thunkApi)=>{
        let token = localStorage.getItem('accessToken')

    try{
const res = await api.get('/auth/me',{
    headers: {
    Authorization: `Bearer ${token}`, // Pass JWT via Authorization header
  }
})
console.log('response of hydration api', res)
// toast.success('successfully loggin')
return res.data
    }catch(error){
        toast.error('error in hydration api')
        console.log('error in hydration api', error)
    }
})