'use client'
import Link from "next/link";
import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { FaEyeSlash, FaEye } from "react-icons/fa";

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex justify-center items-center h-3/4 ">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>
        <form>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Enter Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Enter Your Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter Your Email"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password Input */}
          <div className="mb-2 relative">
            <label htmlFor="password" className="block text-gray-700">
              Enter Your Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Your Password"
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="button"
              className="absolute right-2 top-10 text-blue-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          {/* Sign Up Button */}
          <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">
            Sign Up
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-xs text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/login" className="underline text-blue-500">
            Log In
          </Link>
        </p>

        {/* Social Logins */}
        <div className="flex justify-center items-center space-x-4 mt-6">
          <button className="text-orange-600 hover:text-blue-500">
            <FaGoogle size={30} />
          </button>
          <button className="text-blue-600 hover:text-blue-600">
            <FaFacebook size={30} />
          </button>
        </div>
      </div>
    </div>
  );
}
