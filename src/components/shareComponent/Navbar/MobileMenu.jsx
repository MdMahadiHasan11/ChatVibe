"use client"

import Link from "next/link";
import { useState } from "react";

const MobileMenu = () => {
  const [display, setDisplay]= useState(false)
  return (
    <menu className="md:hidden">
      <button onClick={()=>setDisplay(!display)} className="bg-blue-600 font-bold text-xl text-white px-2 py-1 rounded-md">
        Menu
      </button>
      <ul className={`${display ? "block" : "hidden"} absolute bg-blue-600 p-6 min-h-screen top-0 right-0 transition-all`}>
        <button onClick={()=>setDisplay(false)} className="border-2 w-10 h-10 rounded-full mb-8">X</button>
        <li className="hover:text-blue-600 transition-all ">
          <Link href={"/"}>Home</Link>
        </li>
        <li className="hover:text-blue-600 transition-all ">
          <Link href={"/about"}>About</Link>
        </li>
        <li className="hover:text-blue-600 transition-all ">
          <Link href={"/contacts"}>Contacts</Link>
        </li>
        <li className="hover:text-blue-600 transition-all ">
          <Link href={"/products"}>Products</Link>
        </li>
      </ul>
    </menu>
  );
};

export default MobileMenu;