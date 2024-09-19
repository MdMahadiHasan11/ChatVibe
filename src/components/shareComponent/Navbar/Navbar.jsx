"use client"
import Link from "next/link";
import React from "react";
// import { useRouter } from "next/router";
import MobileMenu from "./MobileMenu";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { IoHome } from "react-icons/io5";
import { useRouter } from "next/navigation";

function Navbar() {
  const router = useRouter();

  // Function to check if the link is active
  const isActive = (path) => router.pathname === path;

  return (
    <nav className="text-[#1973e8] bg-[#d8e0fc80]">
      <div className="flex justify-between items-center container mx-auto">
        <a
          href="/"
          className="text-center p-5 gap-1 justify-center items-center font-bold flex text-3xl text-blue-600"
        >
          <IoHome className="text-black" />
          Chat<span className="">Vibe</span>
        </a>

        {/* desktop menu */}
        <menu className="hidden md:flex items-center gap-20 text-[#827F7F] font-semibold mr-6">
          <ul className="flex gap-4">
            <li
              className={`hover:text-blue-600 transition-all ${
                isActive("/") ? "border-b-2 border-blue-600" : ""
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`hover:text-blue-600 transition-all ${
                isActive("/about") ? "border-b-2 border-blue-600" : ""
              }`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`hover:text-blue-600 transition-all ${
                isActive("/contact") ? "border-b-2 border-blue-600" : ""
              }`}
            >
              <Link href="/contact">ContactUs</Link>
            </li>
            <li
              className={`hover:text-blue-600 transition-all ${
                isActive("/pricing") ? "border-b-2 border-blue-600" : ""
              }`}
            >
              <Link href="/pricing">Pricing</Link>
            </li>
          </ul>
        </menu>

        <div>
          <ul className="hidden md:flex items-center gap-1">
            <li className="py-2 px-4 text-xl text-white rounded-md bg-blue-500 hover:text-white hover:scale-105 transition-all">
              <button>Login</button>
            </li>
          </ul>
        </div>
        {/* mobile menu */}
        <MobileMenu />
      </div>
    </nav>
  );
}

export default Navbar;
