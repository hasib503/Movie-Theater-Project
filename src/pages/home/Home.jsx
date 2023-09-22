import React from "react";
import Container from "../../components/container/Container";
import { Helmet } from 'react-helmet-async';
import NowPlayingMovies from "../NowPlayingMovies/NowPlayingMovies";
import TopFeaturedMovie from "../TopFeaturedMovie/TopFeaturedMovie";

const Home = () => {
  return (
    <>
      <Container>
        <Helmet>
          <title>Movie-Theater | Home</title>
        </Helmet>
        <NowPlayingMovies></NowPlayingMovies>
        <TopFeaturedMovie></TopFeaturedMovie>
      </Container>
    </>
  );
};

export default Home;






