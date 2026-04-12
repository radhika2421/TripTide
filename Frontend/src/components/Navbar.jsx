import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white sticky top-0 z-50">
      
      <div className="w-full px-4 py-4">
        
        <div className="flex items-center justify-between">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            
            {/* Logo Image */}
            <img
              src="/triptideLogo.jpg" // adjust path if needed
              alt="TripTide Logo"
              className="w-10 h-10 rounded-full object-cover border"
            />

            {/* Text */}
            <h1 className="text-2xl md:text-3xl font-bold text-indigo-600 tracking-tight">
              TripTide
            </h1>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              to="/listings"
              className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700 transition"
            >
              Listings
            </Link>

            <Link
              to="/listings/new-listing"
              className="bg-indigo-600 text-white px-4 py-2 rounded-xl shadow hover:bg-indigo-700 transition"
            >
              Create Listing
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="mt-4 flex flex-col gap-3 md:hidden">
            
            <Link
              to="/listings"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-center"
              onClick={() => setOpen(false)}
            >
              Listings
            </Link>

            <Link
              to="/listings/new-listing"
              className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-center"
              onClick={() => setOpen(false)}
            >
              Create Listing
            </Link>

          </div>
        )}

      </div>
    </header>
  );
}