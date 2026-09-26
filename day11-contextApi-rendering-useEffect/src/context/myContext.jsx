import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyStore = createContext();

export const ContextProvider = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  const [apiData, setApiData] = useState([]);
  const [cartProduct, setCartProduct] = useState([]);


  console.log(cartProduct);

  async function callApi() {
    const res = await axios.get("https://fakestoreapi.com/products");

    setApiData(res.data);
  }

  useEffect(() => {
    callApi();
  }, []);


  const updatecart = (id)=>{

    setCartProduct((prev)=>{
        return prev.map((val)=>{
            return  val.id === id ? {...val, quantity : val.quantity + 1} : val;
        })
    })

  }
  const DecrementCart = (id)=>{

    setCartProduct((prev)=>{
        return prev.map((val)=>{
            return  val.id === id ? {...val, quantity : val.quantity - 1} : val;

        }).filter((item)=> item.quantity > 0)
    })
  }

  function removeCart(id){
    setCartProduct((prev)=>{
        return prev.filter((val)=> val.id !== id);
    })
  }

  return (
    <MyStore.Provider
      value={{
        apiData,
        setApiData,
        toggle,
        setToggle,
        cartProduct,
        setCartProduct,
        updatecart,
        DecrementCart,
        removeCart
        
      }}
    >
      {children}
    </MyStore.Provider>
  );
};
