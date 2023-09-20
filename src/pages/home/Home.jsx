import React from "react";
import { Helmet } from "react-helmet-async";
import HomeBanner from "../../components/homeBanner/HomeBanner";

const Home = () => {
  return (
    <>
      {/* Helmet package */}
      <Helmet>
        <title>Movie-Theater | Home</title>
      </Helmet>

      {/* Banner Section */}
      <HomeBanner></HomeBanner>
    </>
  );
};

export default Home;
