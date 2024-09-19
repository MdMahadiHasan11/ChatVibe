import Link from "next/link";
import React from "react";
import MobileMenu from "./MobileMenu";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
function Navbar() {
  return (

    <nav className="text-[#1973e8] bg-[#d8e0fc80] border-b-2  border-black">
        <div className="flex justify-between items-center container mx-auto">
        <a href="/" className="text-center p-5 font-bold text-3xl text-blue-600">
        Chat<span className="">Vibe</span>
      </a>

  

      {/* desktop menu */}
      <menu className="hidden md:flex items-center gap-20 text-[#827F7F] font-semibold mr-6">
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

      </menu>


<div>
<ul className=" hidden md:flex items-center gap-1 ">
          {/* <li className=" py-1 px-2 text-2xl text-black rounded-md hover:bg-blue-500 hover:text-white  hover:scale-105 transition-all">
          <IoNotifications />
          </li>
          <li className=" py-1 px-2 text-2xl text-black rounded-md hover:bg-blue-500 hover:text-white  hover:scale-105 transition-all">
          <CgProfile />
          </li> */}
            <li className=" py-2  px-4 text-xl text-white rounded-md bg-blue-500 hover:text-white  hover:scale-105 transition-all">
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