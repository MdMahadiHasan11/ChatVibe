"use client";

import Link from "next/link";
import { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { ImCross } from "react-icons/im";
import { RiMenuUnfold2Line } from "react-icons/ri";
import Profile from "./Profile";

const MobileMenu = () => {
  const [isDropDown, setIsDropDown] = useState();
  // Function to handle the dropdown toggle
  const toggleDropdown = () => {
    setIsDropDown(!isDropDown);
  };
  const [display, setDisplay] = useState(false);
  // menu show off on
  const displayOnOff = () => {
    setDisplay(!display);
    // profile set flase
    setIsDropDown(false);
  };
  return (
    <menu className="md:hidden z-30 h-full">
      {/* Add flexbox and justify-end to align the button on the right */}

      <div className="flex justify-end">
        <button
          onClick={() => displayOnOff()}
          className="bg-blue-600 font-bold text-xl text-white px-2 py-1 rounded-md"
        >
          <RiMenuUnfold2Line />
        </button>
      </div>

      <ul
        className={`${
          display ? "block" : "hidden"
        } absolute bg-blue-600 min-h-screen top-0 right-0 transition-all text-white pb-5`}
      >
        <button
          onClick={() => setDisplay(false)}
          className="hover:text-red-500 p-6 mb-6"
        >
          <ImCross className="text-2xl" />
        </button>
        <hr className="text-xl font-bold h-2 mb-3" />
        <li
          onClick={() => displayOnOff()}
          className="md:hover:text-blue-300 px-6 transition-all"
        >
          <Link href="/">Home</Link>
        </li>
        <li
          onClick={() => displayOnOff()}
          className="md:hover:text-blue-300 px-6 transition-all"
        >
          <Link href="/about">About</Link>
        </li>
        <li
          onClick={() => displayOnOff()}
          className="md:hover:text-blue-300 px-6 transition-all"
        >
          <Link href="/contact">Contacts</Link>
        </li>
        <li
          onClick={() => displayOnOff()}
          className="md:hover:text-blue-300 px-6 transition-all"
        >
          <Link href="/pricing">Pricing</Link>
        </li>
        {/* profile dropdown */}
        {/* profile dropdown */}
        <div onClick={toggleDropdown}>
          <li className="md:hover:text-blue-300 px-6 transition-all mt-2 cursor-pointer ">
            {!isDropDown && <CgProfile className="text-2xl mx-auto" />}
          </li>
          {isDropDown && <Profile />}
        </div>
        <hr className="mt-5" />
        <li className="py-2 mt-5 px-4 bg-blue-700 border-0 mx-4 text-white rounded-md hover:text-white hover:scale-105 transition-all text-center">
          <button>Login</button>
        </li>
      </ul>
    </menu>
  );
};

export default MobileMenu;
