import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Star, ShoppingCart } from 'lucide-react';
import { productApi } from '../api/getProductApi';
import { useQuery } from '@tanstack/react-query';
import { useProductApi } from '../hooks/productsHopks';

const Shop = () => {

const {data, isPending, error} = useProductApi()

  // Skeleton Card Component
  const SkeletonCard = () => (
    <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm animate-pulse">
      {/* Image Skeleton */}
      <div className="h-56 bg-gray-200" />

      {/* Content Skeleton */}
      <div className="p-5 space-y-3">
        {/* Category */}
        <div className="h-5 w-20 bg-gray-200 rounded-full" />

        {/* Title */}
        <div className="h-4 w-full bg-gray-200 rounded" />
        <div className="h-4 w-3/4 bg-gray-200 rounded" />

        {/* Description */}
        <div className="h-3 w-full bg-gray-200 rounded" />
        <div className="h-3 w-5/6 bg-gray-200 rounded" />

        {/* Rating */}
        <div className="h-4 w-1/2 bg-gray-200 rounded" />

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div className="space-y-2">
            <div className="h-3 w-10 bg-gray-200 rounded" />
            <div className="h-6 w-20 bg-gray-200 rounded" />
          </div>
          <div className="h-9 w-20 bg-gray-200 rounded-lg" />
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
            Our Collection
          </h1>
          <p className="text-gray-500 mt-2 text-lg">
            Discover products made for your style.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

          {/* Skeleton Loading */}
          {isPending
            ? Array(8).fill(0).map((_, i) => <SkeletonCard key={i} />)
            :data.map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                >
                  {/* Image */}
                  <div className="h-56 bg-gray-50 flex items-center justify-center p-6 relative overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-5 flex flex-col flex-1">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full w-fit">
                      {product.category}
                    </span>

                    <h2 className="text-sm font-bold text-gray-900 mt-3 line-clamp-2 leading-snug">
                      {product.title}
                    </h2>

                    <p className="text-xs text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="flex items-center gap-2 mt-3">
                      <div className="flex items-center gap-1 text-amber-500">
                        <Star size={14} fill="currentColor" />
                        <span className="text-sm font-semibold text-gray-800">
                          {product.rating.rate}
                        </span>
                      </div>
                      <span className="text-xs text-gray-400">
                        ({product.rating.count} reviews)
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-[10px] uppercase text-gray-400 font-semibold">Price</p>
                        <p className="text-xl font-extrabold text-gray-900">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>

                      <button
                        onClick={() => addToCart(product)}
                        className="flex items-center gap-1.5 bg-indigo-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-indigo-700 active:scale-95 transition-all shadow-md shadow-indigo-200"
                      >
                        <ShoppingCart size={16} />
                        Add
                      </button>
                    </div>
                  </div>
                </div>
              ))
          }

        </div>

      </div>
    </div>
  )
}

export default Shop