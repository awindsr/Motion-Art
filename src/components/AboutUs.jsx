import React from "react";

export default function AboutUs() {
  return (
    <div className="flex flex-col text-white font-sora justify-even h-auto items-center py-9 mb-[5rem]">
      <div>
        <p className="bg-[#0e0f1b] text-[1.2rem] text-center">
          Trusted by thousands of users around the world
        </p>
      </div>
      <div>
        <RatingItem image="./motionarteffect-img1.png" />
        <RatingItem image="./motionarteffect-img2.png" />
        <RatingItem image="./motionarteffect-img3.png" />
      </div>
    </div>
  );
}

function RatingItem({ image }) {
  return (
    <div className="flex flex items-center p-4 space-x-2">
      <img src={image} />
      <div className="flex flex-col space-y-2">
        <img src="./motionarteffect-img4.png" />
        <p className="text-[.9rem] text-gray-400">4.5 Score, 9 Reviews</p>
      </div>
    </div>
  );
}
