import React from 'react';

const ReadingList = () => {
  return (
    <div className=" px-3  space-y-5">
      <div>
        <h2 className=" text-lg font-semibold">Reading List</h2>
        <p className=" text-sm font-normal">
          Here you can track the progress of everything you are reading. Tap and
          hold on an item to edit.
        </p>
      </div>
      <div className=" border rounded-xl border-dashed  grid place-items-center border-black min-h-[135px]">
        <button className=" text-[#6600CC]">+ ADD TO READING LIST</button>
      </div>
    </div>
  );
};

export default ReadingList;
