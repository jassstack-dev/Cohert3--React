
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900">
            Shop<span className="text-gray-500">ly</span>
          </h1>
        </div>

        {/* Center Navigation */}
        <div className="flex items-center gap-8">
          <NavLink
            to="/"
            className="text-sm font-medium text-gray-900 transition hover:text-gray-500"
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="text-sm font-medium text-gray-900 transition hover:text-gray-500"
          >
            About
          </NavLink>

          <NavLink
            to="/products"
            className="text-sm font-medium text-gray-900 transition hover:text-gray-500"
          >
            Products
          </NavLink>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-5">

          {/* Cart */}
          <NavLink
            to="/cart"
            className="relative text-gray-900 transition hover:text-gray-500"
          >
            {/* Cart Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437m0 0L6.75 14.25a2.25 2.25 0 002.182 1.75h7.136a2.25 2.25 0 002.182-1.75l1.644-6.157a1.125 1.125 0 00-1.087-1.418H5.106zm4.826 12.75a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0zm9 0a1.125 1.125 0 11-2.25 0 1.125 1.125 0 012.25 0z"
              />
            </svg>

            {/* Cart Count */}
            <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-black px-1 text-[10px] font-bold text-white">
              3
            </span>
          </NavLink>

          {/* Login */}
          <NavLink
            to="/login"
            className="rounded-lg bg-black px-4 py-2 text-sm font-semibold text-white transition hover:bg-gray-800"
          >
            Login
          </NavLink>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;
