import { useContext } from "react";
import { MyStore } from "../context/MyContext";

const Navbar = () => {
  const { setToggle, cart } = useContext(MyStore);

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-black text-sm font-bold text-white">
            FS
          </div>

          <h1 className="text-xl font-bold text-gray-900">
            Fake Store
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <button
            onClick={() => setToggle(true)}
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Home
          </button>

          <button
            onClick={() => setToggle(true)}
            className="text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Products
          </button>

          <button
            onClick={() => setToggle(false)}
            className="relative text-sm font-medium text-gray-700 transition hover:text-black"
          >
            Cart

            <span className="absolute -right-4 -top-3 flex h-5 w-5 items-center justify-center rounded-full bg-black text-[10px] font-bold text-white">
              {cart.length}
            </span>
          </button>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <button className="hidden h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-700 transition hover:bg-gray-200 sm:flex">
            JS
          </button>

          <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-800 transition hover:bg-gray-100">
            Login
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
