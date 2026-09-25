import React from "react";

const Cart = ({cart}) => {
    

    let sum = cart.reduce((acc, num)=>{
        return acc + num.price;
    },0)

    let tax = (sum*18)/100;

    


  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="mt-1 text-sm text-gray-500">
            Review your products before checkout
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* Cart Products */}
          <div className="space-y-4 lg:col-span-2">
            
            {/* Product 1 */}
          {
            cart.map((val)=>{
                return   <div className="flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
              {/* Image */}
              <div className="h-28 w-full overflow-hidden rounded-xl bg-gray-100 sm:h-28 sm:w-28">
                <img
                  src={val.image}
                  alt="Product"
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col justify-between gap-4 sm:flex-row sm:items-center">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    {val.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    {val.description}
                  </p>

                  <p className="mt-2 text-base font-semibold text-gray-900">
                    ₹{val.price}
                  </p>
                </div>

                {/* Quantity */}
                <div className="flex items-center gap-3">
                  <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-lg hover:bg-gray-100">
                    −
                  </button>

                  <span className="w-6 text-center font-medium">1</span>

                  <button className="flex h-9 w-9 items-center justify-center rounded-lg border border-gray-300 text-lg hover:bg-gray-100">
                    +
                  </button>
                </div>

                {/* Delete */}
                <button className="text-sm font-medium text-red-500 hover:text-red-600">
                  Remove
                </button>
              </div>
            </div>
            })
          }

         
          </div>

          {/* Order Summary */}
          <div className="h-fit rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <h2 className="text-xl font-bold text-gray-900">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Subtotal</span>
                <span className="font-medium text-gray-900">₹{sum.toFixed(2)}</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Shipping</span>
                <span className="font-medium text-green-600">Free</span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-gray-500">Tax</span>
                <span className="font-medium text-gray-900">₹{tax.toFixed(2)}</span>
              </div>
            </div>

            <div className="my-6 border-t border-gray-200"></div>

            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900">
                Total
              </span>

              <span className="text-2xl font-bold text-gray-900">
                ₹{(sum+tax).toFixed(2)}
              </span>
            </div>

            <button className="mt-6 w-full rounded-xl bg-black px-5 py-3.5 font-semibold text-white transition hover:bg-gray-800">
              Proceed to Checkout
            </button>

            <button className="mt-3 w-full rounded-xl border border-gray-300 px-5 py-3.5 font-semibold text-gray-700 transition hover:bg-gray-50">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;