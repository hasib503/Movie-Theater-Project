import React from "react";
import Container from "../../components/container/Container";
import PrimaryBtn from "../../components/primaryBtn/PrimaryBtn";

const Home = () => {
  return (
    <>
      <Container>
        <h1 className="text-4xl font-bold">Home Page</h1>
        <PrimaryBtn title={"Home"}></PrimaryBtn>
      </Container>
    </>
  );
};

export default Home;
