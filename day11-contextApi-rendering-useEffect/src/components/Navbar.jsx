import React, { useContext } from "react";
import { MyStore } from "../context/myContext";

const Navbar = () => {

    const {setToggle, cartProduct} = useContext(MyStore)

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-black text-sm font-bold text-white">
            J
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900">
            Jass<span className="text-gray-400">Store</span>
          </span>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <a
            href="#"
            className="text-sm font-medium text-gray-900 transition hover:text-gray-500"
          >
            Home
          </a>

          <a
           onClick={()=> setToggle(true)}
            className="text-sm font-medium text-gray-500 cursor-pointer transition hover:text-gray-900"
          >
            Products
          </a>

          <a
            href="#categories"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            Categories
          </a>

          <a
            href="#about"
            className="text-sm font-medium text-gray-500 transition hover:text-gray-900"
          >
            About
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* Search */}
          <button className="hidden h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600 transition hover:border-gray-300 hover:bg-gray-50 sm:flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-4.35-4.35m1.35-5.15a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0Z"
              />
            </svg>
          </button>

          {/* Cart */}
          <button onClick={()=> setToggle(false)} className="relative flex h-10 items-center gap-2 rounded-xl bg-black px-4 text-sm font-semibold text-white transition hover:bg-gray-800 active:scale-95">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835L5.77 7.5m0 0h13.98c.696 0 1.21.65.99 1.31l-1.5 4.5a1.05 1.05 0 0 1-.997.72H8.25a1.05 1.05 0 0 1-1.01-.76L5.77 7.5Zm2.48 6.53L7.5 17.25h10.5M9 21h.008M18 21h.008"
              />
            </svg>

            <span    className="hidden sm:inline">Cart</span>

            {/* Cart Count */}
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1 text-[10px] font-bold text-white">
              {cartProduct.length}
            </span>
          </button>

          {/* Mobile Menu */}
          <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-700 transition hover:bg-gray-50 md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.8"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;