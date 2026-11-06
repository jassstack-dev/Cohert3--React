import { useQueries, useQuery } from '@tanstack/react-query';
import React, { useState } from 'react'
import { axiosInstance } from './config/apis';

const Tanstack_pagination = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
  
       const limit = 10

    
  

    const useAllProducts =async ()=>{
        try {
            setIsLoading(true)
            const skip = (currentPage-1)*limit
            const res = await axiosInstance.get(`/products?limit=${limit}&skip=${skip}`)
            return res.data

       

        } catch (error) {
            console.log('error in apis', error)
        }finally{
            setIsLoading(false)
        }
    }

    const {data, isPending,error} = useQuery({
        queryKey:['products', currentPage],
        queryFn: ()=> useAllProducts(currentPage),
        staleTime: 10000,
    })

    const totalPages = data ? Math.ceil(data.total/limit) : 0
   


 



    


   

  return (
   <div className="min-h-screen bg-gray-50">
    <div className="max-w-7xl mx-auto px-4 py-10">

      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Our Products
      </h1>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {isLoading ? (
          Array.from({ length: 10 }).map((_, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden animate-pulse"
            >
              <div className="h-56 bg-gray-200 p-4">
                <div className="h-full w-full bg-gray-300 rounded-lg" />
              </div>

              <div className="p-4">
                <div className="h-5 bg-gray-200 rounded w-3/4" />
                <div className="h-4 bg-gray-200 rounded w-1/2 mt-3" />

                <div className="flex justify-between mt-4">
                  <div className="h-6 bg-gray-200 rounded w-20" />
                  <div className="h-4 bg-gray-200 rounded w-12" />
                </div>

                <div className="h-10 bg-gray-200 rounded-lg mt-5" />
              </div>
            </div>
          ))
        ) : (
          data?.products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition"
            >
              <div className="h-56 bg-gray-50 flex items-center justify-center p-4">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 truncate">
                  {product.title}
                </h2>

                <p className="text-sm text-gray-500 mt-1">
                  {product.brand}
                </p>

                <div className="flex items-center justify-between mt-3">
                  <span className="text-xl font-bold text-gray-900">
                    ${product.price}
                  </span>

                  <span className="text-sm text-yellow-600">
                    ★ {product.rating}
                  </span>
                </div>

                <button
                  type="button"
                  className="w-full mt-4 bg-blue-600 text-white py-2.5 rounded-lg font-medium hover:bg-blue-700 transition"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))
        )}

      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-6 mt-10">

        <button
          disabled={currentPage === 1}
          onClick={()=>setCurrentPage(prev => prev-1)}
          className="px-8 py-2.5 bg-red-600 text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-red-700 transition"
        >
          Prev
        </button>

        <p className="text-gray-700 font-medium">
     pages {currentPage}/{totalPages}
        </p>

        <button
        disabled={currentPage === 20}
        onClick={()=>setCurrentPage(prev => prev+1)}
          className="px-8 py-2.5 bg-red-600 text-white rounded-lg disabled:opacity-40 disabled:cursor-not-allowed hover:bg-red-700 transition"
        >
          Next
        </button>

      </div>

    </div>
  </div>
  )
}

export default Tanstack_pagination;