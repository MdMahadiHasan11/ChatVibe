import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {
  return (

    <nav className="bg-violet-700">
        <div className="flex justify-between items-center container mx-auto">
        <a href="/" className="text-center p-5 font-bold text-3xl text-blue-600">
        Chat<span className="text-white">Vibe</span>
      </a>

      {/* mobile menu */}
    <MobileMenu/>

      {/* desktop menu */}
      <menu className="hidden md:flex items-center gap-20 text-gray-300 font-semibold mr-6">
        <ul className="flex gap-4">
          <li className="hover:text-blue-600 transition-all ">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="hover:text-blue-600 transition-all ">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="hover:text-blue-600 transition-all ">
            <Link href={"/contact"}>ContactUs</Link>
          </li>
          <li className="hover:text-blue-600 transition-all ">
            <Link href={"/pricing"}>Pricing</Link>
          </li>
        </ul>
        <ul className="flex items-center gap-4">
          <li className="bg-blue-600 text-white py-1 px-2 rounded-md hover:bg-blue-700 hover:text-blue-100 hover:scale-105 transition-all">
            <Link href={"/login"}>Log in</Link>
          </li>
          <li className="bg-white text-blue-600 py-1 px-2 rounded-md hover:bg-slate-300 hover:text-blue-700 hover:scale-105 transition-all">
            <Link href={"/sign-up"}>Sign Up</Link>
          </li>
        </ul>
      </menu>
        </div>
   
    </nav>
  );
}

export default Navbar;