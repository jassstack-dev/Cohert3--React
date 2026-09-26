import React, { useContext } from "react";
import { MyStore } from "../context/myContext";

const FetchApis = () => {
   
    const {apiData} = useContext(MyStore)

  return (
    <>
      {apiData.map((val) => {
        return (
          <div
            key={val.id}
            className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative overflow-hidden bg-gray-100">
              <img
                src={val.image}
                alt={val.title}
                className="h-64 w-full object-contain p-6 transition duration-500 group-hover:scale-105"
              />

              <span className="absolute left-3 top-3 rounded-full bg-black px-3 py-1 text-xs font-medium text-white">
                {val.category}
              </span>
            </div>

            <div className="p-5">
              <h2 className="mb-2 truncate text-lg font-semibold text-gray-900">
                {val.title}
              </h2>

              <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-500">
                {val.description}
              </p>

              <div className="mb-4 flex items-center justify-between">
                <span className="text-xl font-bold text-gray-900">
                  ${val.price}
                </span>

                <div className="flex items-center gap-1 text-sm text-gray-600">
                  <span className="text-yellow-500">★</span>
                  <span>{val.rating.rate}</span>
                  <span className="text-gray-400">
                    ({val.rating.count})
                  </span>
                </div>
              </div>

              <button className="w-full rounded-xl bg-black px-4 py-3 text-sm font-medium text-white transition hover:bg-gray-800 active:scale-95">
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default FetchApis;