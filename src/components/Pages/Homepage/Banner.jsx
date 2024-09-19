import React from 'react';

const Banner = () => {
    return (
        <div className='text-center my-8 md:my-16 '>
            <h1 className='text-6xl text-[#30323A] font-extrabold leading-[72px] block mx-auto w-[45%] '>
            Low cost and reliable video meeting
            </h1>
            <p className='pt-3'>
            ChatVibe is the low-cost, reliable video meeting platform that helps you connect with your team, clients, and colleagues.
            </p>
            <button className='btn border-0 text-white text-base mt-3 bg-violet-500 '> Try it for free!</button>
        </div>
    );
};

export default Banner;