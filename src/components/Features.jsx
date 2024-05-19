import React from "react";

export default function Features() {
  return (
    <div className="p-4 ">
      <section className="flex flex-col md:flex-row md:justify-around space-y-9 leading-10 md:leading-[2rem] items-center mb-[5rem] ">
        <div className="flex flex-col items-center md:items-start md:justify-start md:text-left space-y-5">
          <h2 className="font-sora  md:text-left  text-white text-center font-medium text-[1.4rem] md:text-[2.5rem] md:max-w-[50rem] md:leading-[2.7rem]">
            Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors
          </h2>
          <p className=" md:max-w-[50rem]  text-center  md:text-left  font-sora text-gray-400">
            Motion Art for Elementor is a groundbreaking plugin that empowers
            you to effortlessly infuse your website with visually stunning
            motion art elements.
          </p>
          <button className="text-white purschase-envato px-8 py-4 rounded-[1.2rem] text-[1.3rem] w-[19rem] flex items-center justify-center">
            Purschase from Envato &rarr;
          </button>
        </div>
        <img src="./motionarteffect-img5.png" />
      </section>

      <section className="flex flex-col space-y-9 leading-9 md:leading-[3rem] items-center text-white mb-[5rem] md:max-w-[80%]  mx-auto">
        <h2 className="font-sora text-white text-center font-medium text-[1.5rem] md:text-[2.4rem] md:max-w-[40rem] ">
          Apply On Any Section Or Enable For Whole Page
        </h2>
        <div className="flex justify-center flex-col space-y-4 md:space-y-[8rem]">
          <div className="flex flex-col space-y-4 md:space-y-[5rem] h-auto md:flex-row md:space-x-4">
            <div className="">
              <FeatureBox
                image={"./motionarteffect-img11.png"}
                title={"Apply On Section"}
                description={
                  "Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website."
                }
              />
            </div>
            <div className="">
              <FeatureBox
                image={"./motionarteffect-img10.png"}
                title={"Apply On Page"}
                description={
                  "Apply on whole page is a game-changer, offering an unparalleled way to manage applications directly from your website."
                }
              />
            </div>
          </div>
          <div className="">
            <FeatureBoxV2
              image={"./motionarteffect-img8.png"}
              title="Supported by All Popular Browsers"
              description="Rest assured, Motion Art is designed to be compatible with all major web browsers."
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col space-y-9 md:leading-9 leading-[2rem] md:leading-[2.8rem] items-center text-white justify-center  nd:mb-[5rem] md:h-screen">
        <div className="text-center flex flex-col items-center">
          <h2 className="font-sora text-white text-center font-medium text-[1.5rem] mb-5 md:text-[2.4rem] md:max-w-[40rem] w-[100%] ">
            An All-Round Plugin With Powerful Features
          </h2>
          <p className="text-gray-400 max-w-[37rem] md:leading-[1.8rem]">
            Whether you're a seasoned web designer or just starting out, Motion
            Art for Elementor seamlessly integrates with the Elementor platform,
            providing you with a seamless and intuitive experience.
          </p>
        </div>
        <div className="flex flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-7">
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
        </div>
      </section>
    </div>
  );
}

function FeatureBox({ image, title, description }) {
  return (
    <div className="feature-box flex flex-col p-5 text-center md:text-left h-auto space-y-5 justify-around leading-8  ">
      <h3 className="font-sora text-white font-medium text-[1.4rem]">
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
    <div className="feature-box flex flex-col p-7 space-y-6 text-left items-start justify-center leading-[2rem] md:leading-8 max-w-[25rem] md:leading-[1.5rem]">
      <img src={image} />
      <h3 className="font-sora text-white text-left font-medium text-[1.4rem]">
        {title}
      </h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
