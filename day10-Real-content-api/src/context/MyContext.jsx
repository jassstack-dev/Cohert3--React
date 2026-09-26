import {createContext, useState} from "react"

export const MyStore = createContext()


export const ContextProvider  =({children}) =>{

     const [toggle, setToggle] = useState(true);
      const [cart, setCart] = useState(
    
        // to get data from localstorage and if data is not available in the localstorage then value show null
        JSON.parse(localStorage.getItem("cart")) || [],
      );
    
    return <MyStore.Provider value={{toggle, setToggle, cart, setCart}}>
        {children}
    </MyStore.Provider>
}