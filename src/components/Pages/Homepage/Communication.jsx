"use client";
import SectionContainer from "@/components/shareComponent/SectionContainer";
import Image from "next/image";
import React from "react";

const Communication = () => {
  return (
    <SectionContainer>
      <div className='flex flex-col md:flex-row justify-around'>
        <div>
          <Image
            src={`https://i.ibb.co.com/M5GtMCV/message.png`}
            alt='Secure Conversations'
            className='w-[460px] h-[460px]  mt-6 object-cover border-0 rounded-xl'
            width={330}
            height={330}
          />
        </div>

        <div className='flex flex-col justify-center'>
          <h2 className='text-4xl font-bold'>
            <span className='text-4xl font-bold text-violet-500'>
              Communication
            </span>{" "}
            with live discussions
          </h2>
          <p className='text-base text-[#677471] w-[500px] pt-4'>
            Discuss directly with the team, you can send document files for the
            next level of collaboration.
          </p>
          <button className='btn border-0 text-white text-base mt-4 bg-violet-500 '>
            Learn More
          </button>
        </div>
      </div>
    </SectionContainer>
  );
};

export default Communication;
