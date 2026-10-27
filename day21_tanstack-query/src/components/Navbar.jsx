import React from 'react';
import { House, ShoppingBag, Info, LogOut, UserRound } from 'lucide-react';
import { NavLink } from 'react-router';
import { useAuth } from '../hooks/authHooks';

const Navbar = () => {



  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Greeting */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center">
            <UserRound size={21} className="text-indigo-600" />
          </div>

          <div>
            <p className="text-sm text-gray-500">Welcome back,</p>
            <h2 className="text-lg font-bold text-gray-900">
              Hey, Dev 👋
            </h2>
          </div>
        </div>

        {/* Center: Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
        to={'/main'}
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <House size={18} />
            <span>Home</span>
          </NavLink>

          <NavLink
           to={'/main/shop'}
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <ShoppingBag size={18} />
            <span>Shop</span>
          </NavLink>

          <NavLink
           to={'/main/about'}
            className="flex items-center gap-2 text-gray-600 hover:text-indigo-600 transition-colors"
          >
            <Info size={18} />
            <span>About</span>
          </NavLink>
        </div>

        {/* Right: Logout */}
        <button
          onClick={() => console.log('Logout clicked')}
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-50 text-red-600 font-medium hover:bg-red-100 transition-colors"
        >
          <LogOut size={18} />
          <span>Logout</span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;