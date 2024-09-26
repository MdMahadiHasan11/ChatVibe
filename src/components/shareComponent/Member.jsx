import Image from "next/image";
import React from "react";

const Member = ({ src, name, profession, role }) => {
  // console.log(src, name, profession);
  return (
    <div className='flex flex-col items-center justify-between border border-black rounded-md bg-transparent hover:bg-[#aabcd8] hover:scale-105 transition-all h-auto max-w-[320px] mx-auto'>
      <Image
        src={src}
        alt={name}
        height={200}
        width={200}
        className='rounded-lg rounded-b-none w-full h-full'
      />
      <div className='bg-blue-500 hover:bg-blue-600 w-full text-blue-100 p-2'>
        <h3 className='text-2xl font-semibold'>{name}</h3>
        <p className='font-semibold'>{profession}</p>
        <p className='font-semibold'>{role}</p>
      </div>
    </div>
  );
};

export default Member;
