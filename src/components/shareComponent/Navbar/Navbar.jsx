"use client";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { IoNotifications } from "react-icons/io5";
import { BsChatSquareText } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { useState } from "react";
import Profile from "./Profile";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import Image from "next/image";
function Navbar() {
  const session = useSession();
  console.log("sectiondata", session);
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
      name: "Pricing",
      path: "/pricing",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "ContactUs",
      path: "/contact",
    },
  ];
  return (
    <nav className="bg-[#d8e0fc80] border-b-2  border-black">
      <div className="flex justify-between items-center container mx-auto">
        <Link
          href="/"
          className="text-center p-5 font-bold text-3xl text-blue-500 hover:text-blue-600">
          Chat<span className="text-black">Vibe</span>
        </Link>

        {/* desktop menu */}
        <menu className="hidden md:flex items-center gap-20 text-[#827F7F] font-semibold mr-6">
          <ul className="flex gap-4">
            {pageLink &&
              pageLink?.map((page, inx) => (
                <li
                  onClick={() => setIsDropDown(false)}
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
          <ul className="flex items-center gap-[6px] ">
            {/* profile dropdown */}
            {session.data?.user ? (
              <div className="flex gap-4">
                <li
                  onClick={() => setIsDropDown(false)}
                  className=" py-1 px-2 relative text-2xl text-gray-600 rounded-md hover:bg-blue-500 hover:text-white  hover:scale-105 transition-all cursor-pointer">
                  <IoNotifications />
                  <span className="bg-red-500 rounded-full size-4  text-[12px] font-bold absolute -top-1 left-5 flex justify-center items-center text-white">
                    3
                  </span>
                </li>
                {/* chat icon */}
                {/* <li
                  onClick={() => setIsDropDown(false)}
                  className=" py-1 px-2 text-2xl text-black rounded-md hover:bg-blue-500 hover:text-white  hover:scale-105 transition-all cursor-pointer"
                >
                  <BsChatSquareText />
                </li> */}
                <div onClick={toggleDropdown}>
                  <li className=" py-1 px-2 text-2xl bg-blue-500 rounded-md hover:bg-blue-600 text-white  hover:scale-105 transition-all cursor-pointer">
                    {session.data?.user?.image ? (
                      <Image
                        width={22}
                        height={22}
                        src={session.data?.user?.image}
                        alt="Profile picture"
                        className="rounded-full mx-auto"></Image>
                    ) : (
                      <CgProfile />
                    )}
                  </li>
                  {isDropDown && <Profile />}
                </div>
              </div>
            ) : (
              <li className=" text-xl text-white rounded-md bg-blue-500 hover:bg-blue-600 hover:text-white  hover:scale-105 transition-all">
                {/* <Link href={"/api/auth/signup"}>
                  {" "}
                  <button className="text-[16px] px-1 font-bold">SignUp</button>
                </Link> */}
                
                {/* please replace this */}

                <Link
                  href="https://chatvibe-eta.vercel.app/"
                  className="text-center bg-blue-500 text-base font-semibold text-white p-1 rounded-lg hover:bg-blue-600 transition duration-300">
                  Try Now
                </Link>
              </li>
            )}

            {/* mobile menu */}
            <div onClick={() => setIsDropDown(false)}>
              <MobileMenu />
            </div>
          </ul>
        </div>
        {/* mobile menu */}
        <MobileMenu />
        {/* add a comment */}
      </div>
    </nav>
  );
}

export default Navbar;
