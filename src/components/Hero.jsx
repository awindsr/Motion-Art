import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col md:flex-row md:justify-start md:space-y-0 md:items-start items-center space-y-8 text-center font-sora h-auto mt-[4rem] p-2 md:p-10 md:space-x-[15rem] max-w-screen mb-[5rem]">
      <div className="flex flex-col items-center text-white max-w-[12rem] text-[1rem] space-y-2 md:text-left md:text-2xl">
        <p className="text-gradient ">Transform Your Website</p>
        <p>With Motion Art Effect</p>
      </div>
      <div className="flex flex-col items-start md:text-left md:max-w-[40rem] text-white  font-sora space-y-4 p-0 font-medium ">
        <div className="text-[2.2rem] md:text-[4rem] flex flex-col space-y-2  ">
          <p>
            Attract Your Visitors Attention With Colorful
          </p>
          <p className="text-gradient">Motion Art Effect</p>
        </div>

        <p className="text-gray-500 md:max-w-[35rem] ">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations
          into your website.
        </p>
      </div>
    </div>
  );
}
