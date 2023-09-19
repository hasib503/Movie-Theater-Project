import React from "react";
// import errorImage from "../../assets/404-image/page-not-found.jpg";
import "./errorPage.css";
import PrimaryBtn from "../../components/primaryBtn/PrimaryBtn";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="h-screen bg-image">
      <div className="h-screen w-ful bg-[#001232] bg-opacity-80 flex items-center justify-center">
        <div className="text-center">
          <h4 className=" font-bold text-6xl lg:text-[85px] mb-3 md:my-5">
            404
          </h4>
          <p className="font-medium md:text-3xl mb-2 md:my-3">Page not found</p>
          <Link to="/">
            <PrimaryBtn title={"Back to home"}></PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
