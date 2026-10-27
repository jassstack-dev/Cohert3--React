import { axiosInstance } from "../config/axiosInstance"

export const productApi = async () => {
    const res = await axiosInstance.get('/products')
    return res.data  
    
  }