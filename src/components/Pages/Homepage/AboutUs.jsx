import Member from "@/components/shareComponent/Member";
import SectionContainer from "@/components/shareComponent/SectionContainer";
import React from "react";

const AboutUs = () => {
  return (
    <div id='#about'>
      <SectionContainer>
        <div className='text-center pb-12'>
          <h2 className='text-4xl font-bold text-[#3b82f6]'>About Us</h2>
          <p className='text-xl font-semibold capitalize'>
            Meet our team members
          </p>
        </div>
        <div className='flex gap-4 md:gap-2 flex-wrap justify-around'>
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
      </SectionContainer>
    </div>
  );
};

export default AboutUs;
