import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [allProducts, setAllProducts] = useState([]);
  
 const [singleProduct, setSingleProduct] = useState({})
 

  

  const ProductApi = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products");
      
      setAllProducts(res.data.products)
    } catch {
      console.log("Something went wrong:", error.message);
    }
  };

  useEffect(() => {
    ProductApi();
  }, []);

  return (
    <MyStore.Provider value={{ allProducts, setAllProducts ,singleProduct, setSingleProduct}}>
      {children}
    </MyStore.Provider>
  );
};
