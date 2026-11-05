import React from 'react'

const ProductCard = ({ data, isPending, error, categoryProducts }) => {

  if (isPending) return <h1 className="text-center mt-10">Loading products...</h1>

  if (error) return <h1 className="text-center mt-10 text-red-500">Something went wrong!</h1>

  // Decide which products to display
 const products = categoryProducts?.products?.length
  ? categoryProducts.products
  : data?.products ?? []

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <p className="text-red-500">
        Total Products: {products.length}
      </p>

      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        Our Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {products.map((product) => (

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
        ))}

      </div>
    </div>
  )
}

export default ProductCard