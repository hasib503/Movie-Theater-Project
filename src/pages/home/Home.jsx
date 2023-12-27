import React from "react";
import { Helmet } from "react-helmet-async";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import NewsSection from "../../components/news/NewsSection";
import LatestMovies from "../../components/latestMovies/LatestMovies";

const Home = () => {
  return (
    <>
      {/* Helmet package */}
      <Helmet>
        <title>Movie-Theater | Home</title>
      </Helmet>

      {/* Banner Section */}
      <HomeBanner></HomeBanner>
      {/* Latest Movies List */}
      <LatestMovies></LatestMovies>
      {/* News Section */}
      <NewsSection></NewsSection>
    </>
  );
};

export default Home;
