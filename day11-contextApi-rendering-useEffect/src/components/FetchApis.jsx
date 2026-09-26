import React, { useContext } from "react";
import { MyStore } from "../context/myContext";

const FetchApis = ({val,isInCart}) => {


   
    const { setCartProduct, updatecart,DecrementCart} = useContext(MyStore)
    
 

  return (
    <>
      


   
          <div
          
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative overflow-hidden bg-gray-100">
              <img
                src={val.image}
                alt=""
                className="h-64 w-full object-contain p-6 transition duration-500 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                {val.category}
              </span>
            </div>

            <div className="p-5">
              <h2 className="mb-2 truncate text-lg font-semibold text-gray-900">
                {val.title}
              </h2>

              <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-500">
                {val.description}
              </p>

              <div className="mb-4 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">
                  ${val.price}
                </span>

                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span className="text-yellow-500">★</span>
                  <span>{val.rating.rate}</span>
                  <span className="text-gray-400">
                    ({val.rating.count})
                  </span>
                </div>
              </div>

             

      {
        isInCart ? <div className="flex justify-center items-center overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm">
  <button
  onClick={()=>{
    DecrementCart(val.id)
  }}
    className="flex h-10 w-10 items-center justify-center text-xl font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black active:scale-95"
  >
    −
  </button>

  <span className="flex h-10 min-w-10 items-center justify-center border-x border-gray-200 px-3 text-sm font-semibold text-gray-900">
    {isInCart.quantity}
  </span>

  <button
  onClick={()=> updatecart(val.id)}
    className="flex h-10 w-10 items-center justify-center text-xl font-medium text-gray-600 transition hover:bg-gray-100 hover:text-black active:scale-95"
  >
    +
  </button>
</div> : <button onClick={()=> {
                setCartProduct(prev => [...prev,{...val, quantity : 1}])
                alert('product added successfully in the cart')
                
                
              }} className="w-full rounded-xl bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800 active:scale-95">
                Add to Cart
              </button>

      }
             

 
            </div>
          </div>
        

    </>
  );
};

export default FetchApis;