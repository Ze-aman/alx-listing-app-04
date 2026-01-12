import React from "react";
// Assuming you have icons for Search, User, and a Logo
// I'll use simple text/placeholders for this example.

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-10 bg-white shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="text-2xl font-bold text-indigo-600">
            **TravelApp**
          </div>

          {/* Search Bar (Simplified) */}
          <div className="hidden md:flex items-center space-x-2 border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer">
            <span className="text-sm font-semibold">Anywhere</span>
            <span className="text-sm text-gray-400">|</span>
            <span className="text-sm font-semibold">Any week</span>
            <span className="text-sm text-gray-400">|</span>
            <span className="text-sm text-gray-600">Add guests</span>
            <div className="p-2 bg-indigo-600 rounded-full text-white">
              {/* Search Icon Placeholder */}
              🔍
            </div>
          </div>

          {/* Sign In / Sign Up */}
          <div className="flex items-center space-x-4">
            <button className="text-sm font-medium text-gray-700 hover:text-indigo-600">
              Sign In
            </button>
            <button className="text-sm font-medium text-white bg-indigo-600 py-2 px-4 rounded-full hover:bg-indigo-700 transition">
              Sign Up
            </button>
          </div>
        </div>

        {/* Categories/Accommodation Types (Below search on smaller screens) */}
        <div className="mt-3 flex overflow-x-auto space-x-4 pb-2 text-sm text-gray-600 border-t pt-3">
          <span className="font-semibold text-indigo-600 border-b-2 border-indigo-600 cursor-pointer whitespace-nowrap">
            Rooms
          </span>
          <span className="hover:text-indigo-600 cursor-pointer whitespace-nowrap">
            Mansion
          </span>
          <span className="hover:text-indigo-600 cursor-pointer whitespace-nowrap">
            Countryside
          </span>
          <span className="hover:text-indigo-600 cursor-pointer whitespace-nowrap">
            Apartments
          </span>
          <span className="hover:text-indigo-600 cursor-pointer whitespace-nowrap">
            Cabins
          </span>
          <span className="hover:text-indigo-600 cursor-pointer whitespace-nowrap">
            Chalet
          </span>
          <span className="hover:text-indigo-600 cursor-pointer whitespace-nowrap">
            Villa
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;