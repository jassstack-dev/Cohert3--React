
import React from "react";

const Products = ({product,setCart, cart}) => {


 

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-10">
          <p className="mb-2 text-sm font-medium uppercase tracking-wider text-gray-500">
            Our Collection
          </p>

          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Products
          </h1>

          <p className="mt-2 max-w-2xl text-gray-500">
            Explore our latest products and find something perfect for you.
          </p>
        </div>

        {/* Products */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">

          {/* Product 1 */}
          {
            product.map((elem)=>{
                return <div key={elem.id} className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">

            <div className="relative flex h-64 items-center justify-center bg-gray-100 p-6">
              <img
                src={elem.image}
                alt="Fjallraven Backpack"
                className="h-full w-full object-contain transition duration-300 group-hover:scale-105"
              />

              <span className="absolute left-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-medium capitalize text-gray-700 shadow-sm">
                {elem.category}
              </span>
            </div>

            <div className="p-5">
              <h2 className="min-h-[48px] text-base font-semibold leading-6 text-gray-900">
                {elem.title}
              </h2>

              <div className="mt-3 flex items-center gap-2">
                <div className="rounded-md bg-gray-100 px-2 py-1">
                  <span className="text-sm">★ {elem.rating.rate}</span>
                </div>

                <span className="text-sm text-gray-500">
                  ({elem.rating.count})
                </span>
              </div>

              <p className="mt-3 line-clamp-2 text-sm leading-5 text-gray-500">
                {elem.description}
              </p>

              <div className="mt-5 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500">Price</p>
                  <p className="text-xl font-bold text-gray-900">
                    ₹{elem.price}
                  </p>
                </div>

                <button onClick={()=> {
                    // here i add a product direct add in the cart and here also using cart 
                    const updateCart = [...cart,elem]
                    setCart(updateCart)

                    // to set data in the localstorage
                    localStorage.setItem('cart', JSON.stringify(updateCart))
                }} className="rounded-xl bg-black px-4 cursor-pointer py-2.5 text-sm font-semibold text-white hover:bg-gray-800">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
            })
          }


         


        </div>
      </div>
    </div>
  );
};

export default Products;
