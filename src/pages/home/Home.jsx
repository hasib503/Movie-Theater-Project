import React from "react";
import Container from "../../components/container/Container";
import { Helmet } from 'react-helmet-async';
import NowPlayingMovies from "../NowPlayingMovies/NowPlayingMovies";

const Home = () => {
  return (
    <>
      <Container>
        <Helmet>
          <title>Movie-Theater | Home</title>
        </Helmet>
        <NowPlayingMovies></NowPlayingMovies>
      </Container>
    </>
  );
};

export default Home;
