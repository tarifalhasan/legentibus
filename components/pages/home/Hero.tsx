import React from 'react';
import logo from '@/assets/images/logo.png';
import Image from 'next/image';
const Hero = () => {
  return (
    <div className=" bg-hero grid place-items-center">
      <div className=" space-y-4 flex flex-col items-center">
        <Image src={logo} alt="logo" />
        <h2 className=" text-sm font-semibold text-legeWhite">
          LISTEN, READ, AND LEARN LATIN
        </h2>
      </div>
    </div>
  );
};

export default Hero;
