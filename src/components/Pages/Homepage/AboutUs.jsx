import Member from '@/components/shareComponent/Member';
import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-[#e2e7fc] pt-8 px-6" id='#about'>
      <div className="text-center">
        <h2 className="text-4xl font-bold text-[#3b82f6]">About Us</h2>
        <p className="text-xl font-semibold">Meet out team members</p>
        <div className="py-8 grid gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
          <Member
            src={"/images/mahadi.jpg"}
            name={"Md Mahadi Hasan"}
            profession={"Web Developer"}
            role={"Team Leader/Developer"}
          />
          <Member
            src={"/images/sarajit.jpg"}
            name={"Sarajit Mandal"}
            profession={"Web Developer"}
            role={"Ui Ux Lead/Developer"}
          />
          <Member
            src={"/images/asrafulislam.jpg"}
            name={"Ashraful Islam"}
            profession={"Web Developer"}
            role={"Progmmer/Developer"}
          />
          <Member
            src={"/images/shamim.jpg"}
            name={"Md Shamim"}
            profession={"Web Developer"}
            role={"Progmmer/Developer"}
          />
          <Member
            src={"/images/nasim.jpg"}
            name={"Md. Nasim Mondal"}
            profession={"Web Developer"}
            role={"Programmer/Developer"}
          />
          <Member
            src={"/images/atikuzzaman.png"}
            name={"Md Atikuzzaman"}
            profession={"Web Developer"}
            role={"Developer/Ui Designer"}
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;