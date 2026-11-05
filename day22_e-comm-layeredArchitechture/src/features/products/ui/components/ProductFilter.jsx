import React from 'react'
import { useAllCategories, useProductByCategories } from '../../hooks/useProductHooks'


const ProductFilter = ({search, setSearch,categories,
    setCategories}) => {

console.log(categories)


    const {data, isPending} = useAllCategories()
    // console.log('all categories ---->', data)

   

    if(isPending) return <h1>loading categories....</h1>


  
   

  return (
    <div className="flex flex-col md:flex-row items-center gap-4 mb-8">

      {/* Search Bar */}
      <input
        type="text"
        value={search}
        placeholder="Search products..."
        onChange={(e)=>setSearch(e.target.value)}
        
        className="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500"
      />

      {/* Category Filter */}
      <select value={categories} onChange={(e)=> setCategories(e.target.value)} className="w-full md:w-64 px-4 py-3 border border-gray-300 rounded-lg outline-none focus:border-blue-500">
        <option value="all-categories">All Catgories</option>
        {
            data?.map((item)=>{
              
                return    <option key={item.slug} value={item.slug}>
                {item.name}
            </option>
                
            })
        }
      </select>

    </div>
  )
}

export default ProductFilter