import { axiosInstance } from "../config/axiosInstance"

export const productApi = async () => {
   try{
    console.log('prodcut api calling')
     const res = await axiosInstance.get('/products')
    return res.data  
   }catch(error){
    console.log('error inn productg api', error)
   }
  }