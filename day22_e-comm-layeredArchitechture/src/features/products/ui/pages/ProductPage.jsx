
import React from 'react'
import {
  useAllProducts,
  useProductByCategories
} from '../../hooks/useProductHooks'

import ProductCard from '../components/ProductCard'
import ProductFilter from '../components/ProductFIlter'

const ProductPage = () => {

  const {
    data,
    isPending,
    error,
    search,
    setSearch
  } = useAllProducts()

  const {
    data: productByCategories,
    categories,
    setCategories,
  } = useProductByCategories()

 
  return (
    <div>

      <div className="p-10">
        <ProductFilter
          categories={categories}
          setCategories={setCategories}
          search={search}
          setSearch={setSearch}
        />
      </div>

      <ProductCard
           data={data}
           isPending={isPending}
           error={error}
    
           categories={categories}
          setCategories={setCategories}
           categoryProducts= {productByCategories}
      />
    </div>
  )
}

export default ProductPage
