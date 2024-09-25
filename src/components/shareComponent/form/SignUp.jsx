"use client";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FaGoogle, FaFacebook, FaEyeSlash, FaEye } from "react-icons/fa";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // submit user data on database
  const onSubmit = async (data) => {
    // Handle form submission logic here, such as sending data to a server

    try {
      // post data
      const res = await axios.post(
        "http://localhost:3000/api/auth/signup/new-user",
        data
      );

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-3/4 ">
      <div className="bg-white p-8 shadow-lg rounded-lg w-full max-w-sm">
        <h2 className="text-2xl font-semibold mb-6 text-center">Sign Up</h2>

        {/* Form using react-hook-form */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Input */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Enter Your Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Enter Your Name"
              {...register("name", { required: "Name is required" })}
              className={`mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.name ? "border-red-500" : ""
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
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
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Invalid email address",
                },
              })}
              className={`mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.email ? "border-red-500" : ""
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <label htmlFor="password" className="block text-gray-700">
              Enter Your Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter Your Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters long",
                },
              })}
              className={`mt-1 w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                errors.password ? "border-red-500" : ""
              }`}
            />
            <button
              type="button"
              className="absolute right-2 top-10 text-blue-600"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Sign Up
          </button>
        </form>

        {/* Redirect to Login */}
        <p className="text-xs text-center text-gray-500 mt-4">
          Already have an account?{" "}
          <Link href="/api/auth//login" className="underline text-blue-500">
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
