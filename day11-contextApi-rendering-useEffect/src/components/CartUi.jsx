import React, { useContext } from "react";
import { MyStore } from "../context/myContext";

const CartUi = () => {
    const {cartProduct,updatecart,DecrementCart,removeCart} = useContext(MyStore)
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Your Cart
          </h1>
          <p className="mt-1 text-sm text-gray-500">
            Review your products before checkout.
          </p>
        </div>

        {/* Cart Item */}
        {
            cartProduct.map((val)=>{
                return <div className="overflow-hidden mb-10 rounded-3xl border border-gray-200 bg-white shadow-sm">

          <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center">

            {/* Product Image */}
            <div className="flex h-32 w-full shrink-0 items-center justify-center rounded-2xl bg-gray-100 sm:w-32">
              <img
                src={val.image}
                alt="Fjallraven Backpack"
                className="h-full w-full object-contain p-4 transition duration-300 hover:scale-105"
              />
            </div>

            {/* Product Info */}
            <div className="flex-1">
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-gray-400">
                {val.category}
              </p>

              <h2 className="text-lg font-semibold text-gray-900">
                {val.title}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                {val.description}
              </p>

              <p className="mt-3 text-lg font-bold text-gray-900">
                $109.95
              </p>
            </div>

            {/* Quantity */}
            <div className="flex items-center justify-between gap-6 sm:flex-col sm:items-end">

              <div className="flex items-center overflow-hidden rounded-xl border border-gray-200">
                <button 
                onClick={()=>{
                    DecrementCart(val.id)
                }}
                className="flex h-10 w-10 items-center justify-center text-lg font-medium text-gray-600 transition hover:bg-gray-100">
                  −
                </button>

                <span className="flex h-10 min-w-10 items-center justify-center border-x border-gray-200 px-3 text-sm font-semibold text-gray-900">
                  {val.quantity}
                </span>

                <button
                onClick={()=>{
                    updatecart(val.id)
                }}
                 className="flex h-10 w-10 items-center justify-center text-lg font-medium text-gray-600 transition hover:bg-gray-100">
                  +
                </button>
              </div>

              {/* Remove */}
              <button 
              onClick={()=>{
                removeCart(val.id)
              }}
              className="text-sm font-medium text-red-500 transition hover:text-red-700">
                Remove
              </button>

            </div>
          </div>

          {/* Bottom Summary */}
          <div className="flex flex-col gap-4 border-t border-gray-100 bg-gray-50/70 p-5 sm:flex-row sm:items-center sm:justify-between">

            <div>
              <p className="text-sm text-gray-500">
                {val.quantity} item in your cart
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Shipping calculated at checkout
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-xs font-medium uppercase tracking-wider text-gray-400">
                Subtotal
              </p>

              <p className="mt-1 text-2xl font-bold text-gray-900">
                $109.95
              </p>
            </div>

          </div>
        </div>

        {/* Checkout */}
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">

          <button className="rounded-xl border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
            Continue Shopping
          </button>

          <button className="rounded-xl bg-black px-8 py-3 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95">
            Proceed to Checkout
          </button>

        </div>
            })
        }

      </div>
    </div>
  );
};

export default CartUi;