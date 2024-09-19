'use client'
import Image from 'next/image';
import React from 'react';

const Conversations = () => {

    

    return (
        <div className='my-10 md:my-20 container mx-auto flex justify-around'>
            <div className='flex flex-col justify-center'>

<h6 className='text-violet-500 font-semibold pb-2'>
Communicate-Share Ideas-Save Time
</h6> 
<h2 className='text-4xl font-bold'>
<span className='text-4xl font-bold text-violet-500'>
Secure
    </span> Conversations
</h2>
<p className='text-base text-[#677471] w-[500px] pt-4'>
Many of the poses, such as downward dog, upword dog and the plank pose, build upper- body strength. The standing poses, especially if you hold them for several long breaths 
</p>
<button className='btn border-0 text-white text-base mt-4 bg-violet-500 '>Get Started</button>
            </div>
            <div>

            <Image
            src={`https://i.ibb.co.com/9YQvyS2/bg.jpg`}
            alt="Secure Conversations"
            className="w-[460px] h-[460px]  mt-6 object-cover border-0 rounded-full"
            width={330}
            height={330}
          />

            </div>
        </div>
    );
};

export default Conversations;