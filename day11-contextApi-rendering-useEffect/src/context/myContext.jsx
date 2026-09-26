import { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const MyStore = createContext()


export const ContextProvider = ({children}) =>{

      const [apiData, setApiData] = useState([])
    console.log(apiData)


    async function callApi(){
     const res = await axios.get('https://fakestoreapi.com/products')
   
     setApiData(res.data)
    }
   
    useEffect(()=>{
      callApi()
    },[])
    

    return <MyStore.Provider value={{apiData, setApiData}}>
        {children}
    </MyStore.Provider>
}