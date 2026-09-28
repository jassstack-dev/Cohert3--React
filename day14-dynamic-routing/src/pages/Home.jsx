
import React, { useContext } from "react";
import { MyStore } from "../context/MyContext";
import { useNavigate } from "react-router";
import Products from "./Products";

const Home = () => {


   
 const {allProducts} = useContext(MyStore)


 const navigate = useNavigate()
   

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-wider text-gray-500">
            Our Store
          </p>

          <h1 className="mt-2 text-3xl font-bold text-gray-900">
            All Products
          </h1>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {/* Product 1 */}
          {
            allProducts.map((val)=>{
                return <div key={val.id} onClick={()=>navigate(`/details/${val.id}`)}  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">

            <div className="flex h-64 items-center justify-center bg-gray-100 p-6">
              <img
                src={val.images[0]}
                alt="Fjallraven Backpack"
                className="h-full w-full object-contain"
              />
            </div>

            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
               {val.category}
              </p>

              <h2 className="mt-2 line-clamp-2 text-base font-semibold text-gray-900">
                {val.title}
              </h2>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-lg font-bold text-gray-900">
                  ${val.price}
                </span>

                <span className="text-sm text-gray-500">
                  ★ {val.rating}
                </span>
              </div>

              <button className="mt-5 w-full rounded-lg bg-black px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-gray-800">
                Add to Cart
              </button>
            </div>
          </div>
            })
          }

         

        </div>
      </div>
    </div>
  );
};

export default Home;

