"use client";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaUserEdit,
  FaCog,
  FaQuestionCircle,
  FaMoon,
  FaSignOutAlt,
} from "react-icons/fa";

function Profile({ setIsDropDown }) {
  return (
    <div>
      <ul className="absolute right-0 mt-2 w-64 bg-white shadow-lg rounded-lg z-50 animate__animated animate__fadeInDown">
        {/* Profile Header */}
        <li className="p-4 text-center border-b">
          <img
            src="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.2008272138.1726704000&semt=ais_hybrid"
            alt="profile"
            className="w-16 h-16 mx-auto rounded-full"
          />
          <h3 className="mt-2 font-bold">user Name</h3>
        </li>

        {/* Menu Items */}
        <li>
          <Link
            href="/edit-profile"
            className="flex items-center p-3 hover:bg-gray-100 transition duration-200 ease-in-out"
            onClick={() => setIsDropDown(false)}
          >
            <FaUserEdit className="w-5 h-5 text-blue-500" />
            <span className="ml-3 font-semibold">Edit Profile</span>
          </Link>
        </li>
        <li>
          <Link
            href="/settings"
            className="flex items-center p-3 hover:bg-gray-100 transition duration-200 ease-in-out"
            onClick={() => setIsDropDown(false)}
          >
            <FaCog className="w-5 h-5 text-blue-500" />
            <span className="ml-3 font-semibold">Settings & Privacy</span>
          </Link>
        </li>
        <li>
          <Link
            href="/help"
            className="flex items-center p-3 hover:bg-gray-100 transition duration-200 ease-in-out"
            onClick={() => setIsDropDown(false)}
          >
            <FaQuestionCircle className="w-5 h-5 text-blue-500" />
            <span className="ml-3 font-semibold">Help & Support</span>
          </Link>
        </li>
        <li>
          <Link
            href="/accessibility"
            className="flex items-center p-3 hover:bg-gray-100 transition duration-200 ease-in-out"
            onClick={() => setIsDropDown(false)}
          >
            <FaMoon className="w-5 h-5 text-blue-500" />
            <span className="ml-3 font-semibold">Display & Accessibility</span>
          </Link>
        </li>
        <li>
          <button className="flex items-center p-3 hover:bg-gray-100 transition duration-200 ease-in-out w-full text-left">
            <FaSignOutAlt className="w-5 h-5 text-red-500" />
            <span className="ml-3 font-semibold text-red-500">Logout</span>
          </button>
        </li>
      </ul>
    </div>
  );
}

export default Profile;
