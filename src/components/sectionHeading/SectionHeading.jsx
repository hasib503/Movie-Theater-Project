import React from "react";

const SectionHeading = ({ title }) => {
  return (
    <>
      <div className="border-l-[3px] pl-2 border-[#4e94f0]">
        <h2 className="text-2xl lg:text-5xl font-semibold mb-8 mt-16 text-slate-400">
          {title}
        </h2>
      </div>
    </>
  );
};

export default SectionHeading;
