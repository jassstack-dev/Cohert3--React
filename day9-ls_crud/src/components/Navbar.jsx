import React from 'react';
import { set } from 'react-hook-form';

export const Navbar = ({setToggle}) => {
  return (
    <nav className="w-full bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          
          {/* Brand Logo & Name */}
          <div className="flex items-center gap-8">
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white shadow-sm shadow-indigo-200 group-hover:bg-indigo-700 transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">
                Cartify<span className="text-indigo-600">.</span>
              </span>
            </a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-1">
              <a
                href="#products"
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-900 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
              >
                Products
              </a>
              <a
                href="#categories"
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
              >
                Categories
              </a>
              <a
                href="#orders"
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
              >
                Orders
              </a>
              <a
                href="#analytics"
                className="px-3.5 py-2 rounded-lg text-sm font-medium text-slate-600 hover:text-indigo-600 hover:bg-slate-50 transition-colors"
              >
                Analytics
              </a>
            </div>
          </div>

          {/* Right Section: Add Product Button & Profile */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Add Product Button */}
            <button
            onClick={()=> setToggle(prev => !prev)}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-700 active:scale-95 shadow-sm shadow-indigo-100 transition-all cursor-pointer"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              <span>Add Product</span>
            </button>

            {/* Profile Avatar & Info */}
            <button
              type="button"
              className="flex items-center gap-3 p-1.5 rounded-xl hover:bg-slate-50 transition-colors text-left"
            >
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80"
                alt="User Profile"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-slate-100"
              />
              <div className="hidden lg:block">
                <p className="text-xs font-semibold text-slate-900 leading-tight">Alex Rivera</p>
                <p className="text-[11px] text-slate-500 leading-tight">Store Admin</p>
              </div>
              <svg className="hidden sm:block w-4 h-4 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;