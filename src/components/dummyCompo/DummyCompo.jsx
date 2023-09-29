import React from "react";
import { Link } from "react-router-dom";
import dummyImage from "../../assets/dummy-page/qRZm6CIDi.png";
import "./style.css";

const DummyCompo = () => {
  return (
    <>
      <div className="w-full flex justify-center pb-11">
        <div className="flex items-center flex-col lg:flex-row lg:gap-10 justify-center">
          <div className="text-center my-3 md:my-5">
            <h4 className="text-4xl font-light">Page Not Build Yet.</h4>
            <div className="mt-5">
              <Link to="/" className=" glass-bg  text-white py-2 px-4">
                Back to Home page
              </Link>
            </div>
          </div>
          <div className="w-[300px] md:w-1/2">
            <img src={dummyImage} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default DummyCompo;
