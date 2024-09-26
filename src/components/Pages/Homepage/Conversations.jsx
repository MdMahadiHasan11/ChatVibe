"use client";
import SectionContainer from "@/components/shareComponent/SectionContainer";
import Image from "next/image";
import React from "react";

const Conversations = () => {
  return (
    <SectionContainer>
      <div className='flex flex-col-reverse md:flex-row justify-around gap-8 items-center'>
        <div className='flex flex-col justify-center md:flex-1 lg:flex-initial'>
          <h6 className='text-violet-500 font-semibold pb-2'>
            Communicate-Share Ideas-Save Time
          </h6>
          <h2 className='text-4xl font-bold'>
            <span className='text-4xl font-bold text-violet-500'>Secure</span>{" "}
            Conversations
          </h2>
          <p className='text-base text-[#677471] lg:w-[500px] pt-4'>
            Many of the poses, such as downward dog, upword dog and the plank
            pose, build upper- body strength. The standing poses, especially if
            you hold them for several long breaths
          </p>
          <button className='btn border-0 text-white text-base mt-4 bg-violet-500 '>
            Get Started
          </button>
        </div>
        <div className="flex-1 lg:flex-initial">
          <Image
            src={`https://i.ibb.co.com/9YQvyS2/bg.jpg`}
            alt='Secure Conversations'
            className='h-full lg:w-[460px] lg:h-[460px] mt-6 object-cover border-0 rounded-full  md:ml-auto lg:ml-0'
            width={320}
            height={320}
          />
        </div>
      </div>
    </SectionContainer>
  );
};

export default Conversations;
