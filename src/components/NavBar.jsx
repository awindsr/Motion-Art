import React from "react";

export default function NavBar() {
  return (
    <div className="w-screen flex p-2 justify-between md:justify-around py-7">
      <div className="w-[50rem]">
        <img src="./MotionArtEffect-logo.png" />
      </div>
      <button className="text-black bg-white font-outfit px-6 py-2 border border-white rounded-md hover:bg-transparent hover:text-white hidden md:flex md:justify-center md:items-center">
        Purchase Now
      </button>
    </div>
  );
}
