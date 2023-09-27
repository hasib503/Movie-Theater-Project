import React from "react";
import { Helmet } from "react-helmet-async";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import NewsSection from "../../components/news/NewsSection";

const Home = () => {
  return (
    <>
      {/* Helmet package */}
      <Helmet>
        <title>Movie-Theater | Home</title>
      </Helmet>

      {/* Banner Section */}
      <HomeBanner></HomeBanner>
      {/* News Section */}
      <NewsSection></NewsSection>
    </>
  );
};

export default Home;
