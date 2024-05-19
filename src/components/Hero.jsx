import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col items-center space-y-8 text-center font-sora h-auto mt-[4rem] p-2 max-w-screen mb-[5rem]">
      <div className="flex flex-col items-center text-white max-w-[12rem] text-[1rem] space-y-2">
        <p className="text-gradient ">Transform Your Website</p>
        <p>With Motion Art Effect</p>
      </div>
      <div className="flex flex-col items-center text-white  font-sora space-y-6 p-0 font-medium ">
        <div className="text-[2.2rem] flex flex-col space-y-5  ">
          <p className="">
            Attract Your Visitors Attention With Colorful
          </p>
          <p className="text-gradient">Motion Art Effect</p>
        </div>

        <p className="text-gray-500 ">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations
          into your website.
        </p>
      </div>
    </div>
  );
}
