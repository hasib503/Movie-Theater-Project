import React from "react";
import { Helmet } from "react-helmet-async";
import HomeBanner from "../../components/homeBanner/HomeBanner";
import NewsSection from "../../components/news/NewsSection";
import LatestMovies from "../../components/latestMovies/LatestMovies";
import NowShowingMovies from "../../components/nowShowingMovies/NowShowingMovies";

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
      {/* Now Showing Movies */}
      <NowShowingMovies></NowShowingMovies>
      {/* News Section */}
      <NewsSection></NewsSection>
    </>
  );
};

export default Home;
