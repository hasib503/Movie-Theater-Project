import React from "react";

const HomeBanner = () => {
  const bannerVideo =
    "https://dm0qx8t0i9gc9.cloudfront.net/watermarks/video/MPaEbz-/videoblocks-v2-0010_20220518-pm-garelin-cinema-theater-6-cinema-park00000000_bjezkpwlys__4e37fecc7fad21d7191cfc4b14d1fef0__P360.mp4";
  return (
    <div className="relative">
      {/* VIDEO BACKGROUND */}
      <div>
        <video
          className="w-full h-[500px] object-cover"
          src={bannerVideo}
          autoPlay
          muted
          loop
        ></video>
      </div>
      {/* OVERLAY CONTENT */}
      <div className="bg-[#001232] bg-opacity-80 absolute w-full top-0 text-white h-full flex items-center justify-center">
        <div className="w-2/3 md:w-1/2 text-center space-y-4">
          <span className="font-light text-lg md:text-xl lg:text-2xl">
            Watch Movies with friends & family
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-5">
            Movie Marvels: Where Every Frame Tells a Story!
          </h1>
          {/* SEARCH BOX */}
          <div className="pt-3 md:pt-5">
            <input
              className="focus-visible:outline-none px-3 pl-5 py-2 text-black w-2/3 rounded-s-full"
              type="text"
              placeholder="Search movie"
            />
            <button className="primary-btn-bg px-3 py-2 rounded-e-full">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBanner;
