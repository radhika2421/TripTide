import React from 'react'
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

export default function Homepage() {
    return (
        <div className="min-h-screen">
            <Navbar/>
            <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-red-200 to-yellow-100 px-4">
            <img
                src="triptideLogo.jpg"
                alt="TripTide Logo"
                className="w-40 h-40 object-cover rounded-full shadow-lg mb-6"
            />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-3">
                TripTide
            </h1>
            <p className="text-gray-600 text-lg text-center max-w-md mb-8">
                Discover stays that turn trips into getaways.
            </p>
            <div className="flex gap-4 relative">
                <Link to={"/login"}>
                    <button
                    className="px-6 py-2 bg-indigo-600 text-white rounded-xl shadow hover:bg-indigo-700 transition"
                    >
                    Login
                    </button>
                </Link>

                {/* Signup Dropdown */}
                <div className="relative group">
                <button
                    className="px-6 py-2 bg-white text-indigo-600 border border-indigo-600 rounded-xl shadow hover:bg-indigo-50 transition"
                >
                    Signup
                </button>

                {/* Dropdown */}
                <ul className="absolute left-0 mt-2 w-40 bg-white rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto">
                    <li>
                    <a
                        href="/triptide/user-signup"
                        className="block px-4 py-2 hover:bg-gray-100"
                    >
                        User
                    </a>
                    </li>
                    <li>
                    <a
                        href="/triptide/host-signup"
                        className="block px-4 py-2 hover:bg-gray-100"
                    >
                        Host
                    </a>
                    </li>
                </ul>
                </div>

            </div>
            </div>
        </div>
    );
}