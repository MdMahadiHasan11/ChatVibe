"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { IoNotifications } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import Profile from "./Profile";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathName = usePathname();
  const [isDropDown, setIsDropDown] = useState();
  // Function to handle the dropdown toggle
  const toggleDropdown = () => {
    setIsDropDown(!isDropDown);
  };
  // path name or path define
  const pageLink = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "ContactUs",
      path: "/contact",
    },
    {
      name: "Pricing",
      path: "/pricing",
    },
  ];
  return (
    <nav className='bg-[#d8e0fc80] border-b-2  border-black'>
      <div className='flex justify-between items-center container mx-auto'>
        <Link
          href='/'
          className='text-center p-5 font-bold text-3xl text-blue-500 hover:text-blue-600'>
          Chat<span className='text-black'>Vibe</span>
        </Link>

        {/* desktop menu */}
        <menu className='hidden md:flex items-center gap-20 text-[#827F7F] font-semibold mr-6'>
          <ul className='flex gap-4'>
            {pageLink &&
              pageLink?.map((page, inx) => (
                <li
                  key={inx}
                  className={`${
                    pathName === page?.path && "font-bold text-blue-600"
                  } hover:text-blue-600 hover:underline transition-all`}>
                  <Link href={page.path}>{page.name}</Link>
                </li>
              ))}
          </ul>
        </menu>

        <div>
          <ul className=' hidden md:flex items-center gap-1 '>
            <li className=' py-1 px-2 text-2xl text-black rounded-md hover:bg-blue-500 hover:text-white  hover:scale-105 transition-all'>
              <IoNotifications />
            </li>
            {/* profile dropdown */}
            <div className='relative' onClick={toggleDropdown}>
              <li className=' py-1 px-2 text-2xl bg-blue-500 rounded-md hover:bg-blue-600 text-white  hover:scale-105 transition-all'>
                <CgProfile />
              </li>
              {isDropDown && <Profile />}
            </div>

            <li className=' py-1  px-3 text-xl text-white rounded-md bg-blue-500 hover:bg-blue-600 hover:text-white  hover:scale-105 transition-all'>
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
