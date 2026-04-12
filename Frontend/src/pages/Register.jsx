import React, { useState } from "react";
import {Link} from "react-router"
// import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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
    alert("Account created");
    setFormData({
        name: "",
        email: "",
        phone: "",
        password: ""
    })
    // try {
    //   const res = await axios.post(
    //     "http://localhost:8080/api/rethread/auth/register",
    //     formData
    //   );
    //   console.log(res.data);
    //   alert("Account created successfully!");
    // } catch (err) {
    //   console.error(err);
    //   alert("Error creating account");
    // }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Section */}
      <div className="hidden md:flex w-1/2 bg-green-100 items-center justify-center">
        <div className="flex flex-col items-center text-center px-8">
          <img
            src="/site-icon.svg"
            alt="logo"
            className="h-24 w-24 mb-4"
          />
          <h1 className="text-4xl font-bold text-green-700">ReThread</h1>
          <p className="mt-4 text-gray-600">
            Join the sustainable fashion movement 🌱
          </p>
        </div>
      </div>

      {/* Right Section (Form) */}
      <div className="flex w-full md:w-1/2 items-center justify-center px-6">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-center mb-6">
            Create Account ✨
          </h2>

          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your name"
            />
          </div>

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

          {/* Phone */}
          <div className="mb-4">
            <label className="block text-gray-600 mb-1">Phone</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="+91XXXXXXXXXX"
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
              placeholder="Enter password"
            />
          </div>

          {/* Button */}
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition">
            Sign Up
          </button>

          {/* Footer */}
          <p className="text-sm text-center mt-4 text-gray-500">
            Already have an account?{" "}
            <Link to={'/login'}>
              <span className="text-green-600 cursor-pointer">
                Login
              </span>
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;