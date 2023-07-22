import React from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { FiMenu } from 'react-icons/fi';
const MainHeader = () => {
  return (
    <header className="  bg-white py-3 px-5 flex items-center justify-between ">
      <div className=""></div>
      <div className="">
        <h2 className=" text-[15px] text-black  font-bold">Legentibus</h2>
      </div>
      <div className=" flex items-center gap-3">
        <button>
          <BiSearchAlt2 size={24} className=" text-primary" />
        </button>
        <button>
          <FiMenu size={24} className=" text-primary" />
        </button>
      </div>
    </header>
  );
};

export default MainHeader;
