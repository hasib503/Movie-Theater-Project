import React from "react";

const DashboardHeading = ({ title }) => {
  return (
    <div>
      <h3 className="text-3xl bg-gradient-to-r from-[#d42a2a] to-[#ffffff08] font-light inline-block px-3 py-0.5">
        {title}
      </h3>
    </div>
  );
};

export default DashboardHeading;
