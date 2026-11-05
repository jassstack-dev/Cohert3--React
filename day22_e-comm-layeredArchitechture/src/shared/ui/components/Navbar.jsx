import { isAction } from "@reduxjs/toolkit";
import { ShoppingBasket, ShoppingCartPlus } from "lucide-react";
import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-bold text-blue-600">
            Shop<span className="text-gray-900">Hub.</span>
          </NavLink>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/main"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 font-medium"
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }
            end
            >
              Home
            </NavLink>

            <NavLink
              to="/main/products"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 font-medium"
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }
            >
              Shop
            </NavLink>

            <NavLink
              to="/main/aboutpage"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 font-medium"
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }
            >
              About
            </NavLink>
          </div>

          {/* Cart & Logout */}
          <div className="flex items-center gap-5">
            <NavLink
              to="/main/cartpage"
             className={({ isActive }) =>
                isActive
                  ? "text-blue-700 font-medium"
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }
            >
              <ShoppingCartPlus />
            </NavLink>
            <NavLink
              to="/main/orderpage"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-700 font-medium"
                  : "text-gray-700 hover:text-blue-600 font-medium"
              }
            >
              <ShoppingBasket />
            </NavLink>

            <button
              type="button"
              className="bg-blue-600 text-white px-5 py-2 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
