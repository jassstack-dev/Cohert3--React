import React, { useContext, useEffect, useState } from "react";
import FetchApis from "./components/FetchApis";
import Navbar from "./components/Navbar";
import CartUi from "./components/CartUi";
import { MyStore } from "./context/myContext";

const App = () => {

  const {toggle,apiData,cartProduct} = useContext(MyStore)
  return (



    <div>
      <Navbar />

      {
        toggle ? <div className="grid grid-cols-4 gap-5 p-5 ">
        {
          apiData.map((elem)=>{
            let isInCart = cartProduct.find((val)=> val.id === elem.id)
            // console.log(isInCart)
            return <FetchApis key={elem.id} val={elem} isInCart={isInCart} />
          })
        }
      </div> : <div>
        <CartUi />
      </div>
      }

      

      
    </div>
  );
};

export default App;
