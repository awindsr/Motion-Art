import React from "react";

export default function Hero() {
  return (
    <div className="mx-auto flex flex-col md:flex-row md:justify-center md:space-y-0 md:items-start items-center space-y-8 text-center font-sora h-auto mt-[4rem] p-2 md:p-10 max-w-screen mb-[5rem]">
      <div className="flex flex-col items-center text-white max-w-[10rem] text-[1rem] space-y-2 md:text-left md:text-[1rem]">
        <p className="text-gradient ">Transform Your Website</p>
        <p>With Motion Art Effect</p>
      </div>
      <div className="flex flex-col items-start justify-start md:text-left md:max-w-[40rem] max-w-[25rem] text-white  font-sora space-y-4 p-0 font-medium md:mx-40">
        <div className="text-[2rem] md:text-[4.3rem] flex flex-col  text-[#eee5ff] ">
          <p className="md:leading-[5rem] leading-[4rem]">
            Attract Your Visitors Attention With Colorful
          </p>
          <p className="text-gradient">Motion Art Effect</p>
        </div>

        <p className="text-gray-400 font-light md:max-w-[35rem] md:text-[1rem] text-[.9rem] ">
          Unleash the power of creativity with Motion Art for Elementor - your
          ultimate solution for seamlessly integrating captivating animations
          into your website.
        </p>
      </div>
    </div>
  );
}
