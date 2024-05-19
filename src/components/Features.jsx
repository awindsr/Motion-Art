import React from "react";

export default function Features() {
  return (
    <div className="p-4 ">
      <section className="flex flex-col space-y-9 leading-10 items-center mb-[5rem]">
        <h2 className="font-sora text-white text-center font-medium text-[1.4rem]">
          Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
        </h2>
        <p className=" text-center font-sora text-gray-400">
          Motion Art for Elementor is a groundbreaking plugin that empowers you
          to effortlessly infuse your website with visually stunning motion art
          elements.
        </p>
        <button className="text-white purschase-envato px-5 py-3 rounded-lg text-[1.2rem] w-[18rem] flex items-center justify-center">
          Purschase from Envato &rarr;
        </button>
        <img src="./motionarteffect-img5.png" />
      </section>
      <section className="flex flex-col space-y-9 leading-9 items-center text-white">
        <h2 className="font-sora text-white text-center font-medium text-[1.5rem]">
          Apply On Any Section Or Enable For Whole Page
        </h2>
        <FeatureBox
          image={"./motionarteffect-img11.png"}
          title={"Apply On Section"}
          description={
            "Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website."
          }
        />
        <FeatureBox
          image={"./motionarteffect-img10.png"}
          title={"Apply On Page"}
          description={
            "Apply on whole page is a game-changer, offering an unparalleled way to manage applications directly from your website."
          }
        />
        <FeatureBoxV2
          image={"./motionarteffect-img8.png"}
          title=" Supported by All Popular Browsers"
          description=" Rest assured, Motion Art is designed to be compatible with all major
            web browsers."
        />
        <div className="text-center">
          <h2 className="font-sora text-white text-center font-medium text-[1.5rem] mb-5">
            Apply On Any Section Or Enable For Whole Page
          </h2>
          <p className="text-gray-400">
            Whether you're a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </div>
        <FeatureBoxV3
          image={"./motionarteffect-img9.png"}
          title={"Light Weight"}
          description={
            "Motion Art for Elementor is designed to be lightweight."
          }
        />
        <FeatureBoxV3
          image={"./motionarteffect-img6.png"}
          title={"100% Responsive"}
          description={
            "Create a consistent visual experience across all devices."
          }
        />
        <FeatureBoxV3
          image={"./motionarteffect-img7.png"}
          title={"User Friendly Interface"}
          description={
            "Ensure a smooth experience for both applicants and administrators."
          }
        />
      </section>
    </div>
  );
}

function FeatureBox({ image, title, description }) {
  return (
    <div className="feature-box flex flex-col p-5 text-center h-[29rem] items-center justify-around leading-8">
      <h3 className="font-sora text-white text-center font-medium text-[1.4rem]">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
      <img src={image} />
    </div>
  );
}

function FeatureBoxV2({ image, title, description }) {
  return (
    <div className="feature-box flex flex-col p-5 space-y-8 text-center h-[22rem] items-center justify-center leading-8">
      <h3 className="font-sora text-white text-center font-medium text-[1.4rem]">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
      <img src={image} />
    </div>
  );
}

function FeatureBoxV3({ image, title, description }) {
  return (
    <div className="feature-box flex flex-col p-7 space-y-8 text-left  items-start justify-center leading-8">
      <img src={image} />
      <h3 className="font-sora text-white text-left font-medium text-[1.4rem]">
        {title}
      </h3>
      <p className="text-gray-400 ">{description}</p>
    </div>
  );
}
