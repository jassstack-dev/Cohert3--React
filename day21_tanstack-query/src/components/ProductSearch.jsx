
import React from 'react'
import { useProductApi } from '../hooks/productsHopks'

const ProductSearch = () => {

      const {filterProduct} = useProductApi()


  return (

  

    <>
    <div className='flex gap-6 '>
        <div className="mx-auto my-8 w-full max-w-2xl px-4">
      <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white p-2 shadow-md transition focus-within:border-blue-400 focus-within:ring-4 focus-within:ring-blue-100">
        <input
        onChange={(e)=> filterProduct(e.target.value)}
          type="text"
          placeholder="Enter product name..."
          className="w-full bg-transparent px-4 py-3 text-gray-700 outline-none placeholder:text-gray-400"
        />

        <button
          className="shrink-0 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition duration-200 hover:bg-blue-700 active:scale-95"
        >
          Search
        </button>
      </div>
    </div>
    <div className="mx-auto my-6 flex w-full max-w-2xl flex-col gap-2 px-4">
      <label
        htmlFor="category"
        className="text-sm font-semibold text-gray-700"
      >
        Select Category
      </label>

      <select
        name="category"
        id="category"
        defaultValue=""
        className="w-full cursor-pointer appearance-none rounded-xl border border-gray-300 bg-white px-4 py-3 text-gray-700 shadow-sm outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
      >
        <option value="" disabled>
          Choose a category
        </option>
        <option value="groceries">Groceries</option>
        <option value="beauty">Beauty</option>
        <option value="shirt">Shirts</option>
      </select>
    </div>
    </div>
    </>
  )
}

export default ProductSearch
