import { educationIcon, leaf, scrollIcon, searchIcon } from '@/assets/icons';
import Image from 'next/image';
import React from 'react';

const Features = () => {
  const Data = [
    {
      name: 'Start here',
      icon: searchIcon,
    },
    {
      name: 'Beginners',
      icon: leaf,
    },
    {
      name: 'Intermediate',
      icon: educationIcon,
    },
    {
      name: 'Literature',
      icon: scrollIcon,
    },
  ];

  return (
    <div className=" px-3">
      <div className="grid gap-2 grid-cols-2">
        {Data.map((data, index) => (
          <div
            key={index}
            className=" bg-secondary rounded-xl grid place-items-center h-[46px]"
          >
            <div className=" inline-flex gap-2">
              <Image src={data.icon} alt={data.name} />{' '}
              <span className=" text-[15px] text-legeBlack">{data.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
