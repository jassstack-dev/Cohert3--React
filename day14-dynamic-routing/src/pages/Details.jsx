import axios from 'axios'
import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { MyStore } from '../context/MyContext'

const Details = () => {

  const  {id}= useParams()

  

  const {singleProduct,setSingleProduct} = useContext(MyStore)
  console.log(singleProduct)

const singleProductApi = async ()=>{
try{
    const res = await axios.get(`https://dummyjson.com/products/${id}`)
    // console.log(res.data)
    setSingleProduct(res.data)
}catch(error){
    console.log("error in the api", error.message)
}

}

useEffect(() => {
  singleProductApi()
}, [id])


if(String(singleProduct.id) !== String(id)){
  return <div>Loading...</div>;
}
    

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-8">
  <div className="mx-auto max-w-6xl">

    <div className="grid grid-cols-1 gap-10 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm md:grid-cols-2 lg:p-10">

      {/* Image */}
      <div className="flex min-h-[450px] items-center justify-center rounded-2xl bg-gray-100 p-8">
        <img
          src={singleProduct.images?.[0]}
          alt={singleProduct.title}
          className="max-h-[420px] w-full object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex flex-col justify-center">

        <p className="text-sm font-semibold uppercase tracking-wider text-gray-400">
          {singleProduct.category}
        </p>

        <h1 className="mt-2 text-3xl font-bold text-gray-900">
          {singleProduct.title}
        </h1>

        <div className="mt-4 flex items-center gap-4">
          <span className="text-2xl font-bold text-gray-900">
            ${singleProduct.price}
          </span>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-semibold text-gray-700">
            ★ {singleProduct.rating}
          </span>
        </div>

        <p className="mt-6 leading-7 text-gray-600">
          {singleProduct.description}
        </p>

        {/* Product Info */}
        <div className="mt-8 grid grid-cols-2 gap-4">

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs text-gray-400">Brand</p>
            <p className="mt-1 font-semibold text-gray-900">
              {singleProduct.brand}
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs text-gray-400">Stock</p>
            <p className="mt-1 font-semibold text-gray-900">
              {singleProduct.stock}
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs text-gray-400">Availability</p>
            <p className="mt-1 font-semibold text-gray-900">
              {singleProduct.availabilityStatus}
            </p>
          </div>

          <div className="rounded-xl bg-gray-50 p-4">
            <p className="text-xs text-gray-400">Warranty</p>
            <p className="mt-1 font-semibold text-gray-900">
              {singleProduct.warrantyInformation}
            </p>
          </div>

        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {singleProduct.tags?.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Button */}
        <button className="mt-8 w-full rounded-xl bg-black px-5 py-3 font-semibold text-white transition hover:bg-gray-800">
          Add to Cart
        </button>

      </div>
    </div>

  </div>
</div>
  )
}

export default Details