import React, { useState } from 'react';

const Navbar = ({setToggle}) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Features', href: '#' },
    { name: 'Explore', href: '#' },
    { name: 'Pricing', href: '#' },
  ];

  return (
    <nav className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Left: Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <div className="w-9 h-9 rounded-xl bg-indigo-600 flex items-center justify-center text-white font-bold text-xl shadow-sm">
              ⚡
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">
              Brand<span className="text-indigo-600">Name</span>
            </span>
          </div>

          {/* Center: Nav Links (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-indigo-600 font-medium text-sm transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Right: Create Button */}
          <div className="hidden md:flex items-center">
            <button 
            onClick={() => setToggle(prev => !prev)} 
              type="button" 
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold rounded-lg shadow-sm transition-all duration-200 active:scale-95"
            >
              <svg 
                className="w-4 h-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Create
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <button onClick={() => setToggle(prev => !prev)} className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-indigo-600 text-white font-medium rounded-lg shadow-sm">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
              </svg>
              Create
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;