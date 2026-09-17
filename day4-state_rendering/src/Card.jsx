import React from 'react'

const Card = ({product, del}) => {
   
   
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

      {/* Image */}
      <div className="h-60 w-full bg-gray-100">
        <img
          src={product.image}
          alt="Ashwagandha Capsules"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-5">

        {/* Category */}
        <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-700">
          {product.title}
        </span>

        {/* Title */}
        <h2 className="mt-3 text-xl font-semibold text-gray-900">
          {product.title}
        </h2>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-500">
         {product.description}
        </p>

        {/* Bottom */}
        <div className="mt-5 flex items-center justify-between">

          <div>
            <p className="text-xs text-gray-400">
              Price
            </p>

            <p className="text-2xl font-bold text-gray-900">
              ₹{product.price}
            </p>
          </div>

          <button className="rounded-lg bg-red-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-red-900 cursor-pointer" onClick={()=> del(product.id)}>
            delete
          </button>

        </div>

      </div>
    </div>
  );
};

export default Card;