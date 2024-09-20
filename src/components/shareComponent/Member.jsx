import Image from "next/image";
import React from "react";

const Member = ({ src, name, profession, role }) => {
  // console.log(src, name, profession);
  return (
    <div className="flex flex-col items-center justify-between border border-black rounded-md bg-transparent hover:bg-[#aabcd8] hover:scale-105 transition-all h-auto ">
      <Image src={src} alt={name} height={200} width={200} />
      <div className="bg-[#3b82f6] w-full text-blue-100 py-2">
        <h3 className="text-2xl font-semibold">{name}</h3>
        <p className="font-semibold">{profession}</p>
        <p className="font-semibold">{role}</p>
      </div>
    </div>
  );
};

export default Member;
