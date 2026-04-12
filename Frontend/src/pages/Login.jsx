import React, { useState } from "react";
import {Link} from 'react-router'
// import axios from "axios";

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Logged in");
        setFormData({
        email: "",
        password: "",
        })
        // try {
        //   const res = await axios.post("http://localhost:5000/api/auth/login", formData);
        //   console.log(res.data);
        //   alert("Login successful!");
        // } catch (err) {
        //   console.error(err);
        //   alert("Invalid credentials");
        // }
    };

    return (
        <div className="min-h-screen flex">
        {/* Left Side (Image / Branding) */}
        <div className="hidden md:flex w-1/2 bg-green-100 items-center justify-center">
            <div className="flex flex-col items-center justify-center text-center px-8">
            <img src="/site-icon.svg" alt="fashion" className="h-24 w-24 mb-4"/>
            <h1 className="text-4xl font-bold text-green-700">ReThread</h1>
            <p className="mt-4 text-gray-600">
                Buy & sell preloved fashion sustainably 🌱
            </p>
            </div>
        </div>

        {/* Right Side (Form) */}
        <div className="flex w-full md:w-1/2 items-center justify-center px-6">
            <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
            >
            <h2 className="text-2xl font-semibold text-center mb-6">
                Welcome Back 👋
            </h2>

            {/* Email */}
            <div className="mb-4">
                <label className="block text-gray-600 mb-1">Email</label>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                />
            </div>

            {/* Password */}
            <div className="mb-6">
                <label className="block text-gray-600 mb-1">Password</label>
                <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
                />
            </div>

            {/* Button */}
            <button
                type="submit"
                className="w-full bg-sky-600 text-white py-2 rounded-lg hover:bg-sky-700 transition"
            >
                Login
            </button>

            {/* Extra Links */}
            <p className="text-sm text-center mt-4 text-gray-500">
                Don’t have an account?{" "}
                <Link to={'/register'}>
                <span className="text-sky-600 cursor-pointer">
                    Sign up
                </span>
                </Link>
            </p>
            </form>
        </div>
        </div>
    );
    };

export default Login;