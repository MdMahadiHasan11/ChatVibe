"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const Banner = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const slides = [
    {
      text: "Get a Link You can share",
      description:
        "Click new meeting to create a new meeting and share the link",
      img: "https://i.ibb.co.com/SfpWJdQ/images.jpg", // Replace with actual image source
    },
    {
      text: "Connect with anyone",
      description:
        "Invite your team members to join the meeting via a shared link.",
      img: "https://i.ibb.co.com/ynh16GR/memory.png", // Replace with actual image source
    },
    {
      text: "Connect with anyone",
      description:
        "Invite your team members to join the meeting via a shared link.",
      img: "https://i.ibb.co.com/SfpWJdQ/images.jpg", // Replace with actual image source
    },
  ];

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className='overflow-x-hidden overflow-y-hidden'>
      <div className='h-screen pb-8 bg-[#e2e7fc] p-3 flex items-center justify-center'>
        <div className='flex flex-col lg:flex-row items-center justify-between w-full h-full max-w-8xl'>
          {/* Left Section - Text and Buttons */}
          <div className='flex-1 h-full flex flex-col justify-center text-left p-4 lg:p-8 lg:mr-8 space-y-4 lg:space-y-6'>
            <h1 className='text-3xl md:text-5xl lg:text-5xl font-bold mb-4'>
              Meeting and Video call for <br /> everyone with{" "}
              <span className='text-blue-500'>ChatVibe</span>
            </h1>

            <div className='relative flex flex-col  lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 justify-center lg:justify-start'>
              <button className='bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300'>
                New Meeting
              </button>

              <button className='border border-gray-400 py-2 px-4 rounded-lg hover:bg-gray-200 transition duration-300'>
                Enter a Link
              </button>

              <button className='absolute right-2 bottom-1 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 block sm:hidden'>
                Join
              </button>
            </div>

            <p className='mt-10 text-gray-500'>
              Learn more about{" "}
              <a href='#' className='text-blue-500'>
                Our team
              </a>
              .
            </p>
          </div>

          {/* Right Section - Auto-Sliding Image/Slider */}
          <div className='flex-1 h-[520px] max-w-full md:max-w-[620px] pb-12 lg:max-w-[720px] lg:ml-8'>
            <div className='bg-[#d9d9d9] p-6 rounded-lg shadow-lg h-full flex flex-col justify-center space-y-4'>
              <Image
                width={208}
                height={208}
                src={slides[activeSlide].img}
                alt={slides[activeSlide].text}
                className='w-52 h-52  rounded-full mx-auto'
              />
              <p className='mt-4 text-center text-gray-600'>
                {slides[activeSlide].text}
              </p>
              <p className='mt-2 text-center text-sm text-gray-500'>
                {slides[activeSlide].description}
              </p>
            </div>
            <div className='flex justify-between mt-4'>
              <button
                onClick={() =>
                  setActiveSlide(
                    (activeSlide - 1 + slides.length) % slides.length
                  )
                }
                className='text-blue-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M15 19l-7-7 7-7'
                  />
                </svg>
              </button>
              <button
                onClick={() =>
                  setActiveSlide((activeSlide + 1) % slides.length)
                }
                className='text-blue-500'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  className='w-6 h-6'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M9 5l7 7-7 7'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
