import React from 'react';
import Hero from './Hero';
import Features from './features';
import Explore from './explore';
import Image from 'next/image';
import { goal } from '@/assets/icons';
import ReadingList from './readingList';
import Testimonial from './testimonial';

const HomeMain = () => {
  return (
    <div className=" space-y-5">
      <Hero />
      <Features />
      <Explore />
      <div className="px-3">
        <button className=" bg-[#00CC66] text-white w-full justify-center text-base font-semibold rounded-[7px] py-3 uppercase flex  items-center gap-2">
          <Image src={goal} alt="goal" />
          <span>SET DAILY GOAL</span>
        </button>
      </div>
      <ReadingList />
      <Testimonial />
    </div>
  );
};

export default HomeMain;
