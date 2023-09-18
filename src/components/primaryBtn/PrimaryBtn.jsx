import React from "react";

const PrimaryBtn = ({ title }) => {
  return (
    <button className="primary-btn-bg uppercase px-7 rounded py-2 font-medium text-sm duration-500">
      {title}
    </button>
  );
};

export default PrimaryBtn;
