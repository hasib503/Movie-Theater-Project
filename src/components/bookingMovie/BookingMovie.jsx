import React from "react";
import Navbar from "../shared/navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Container from "../container/Container";

const BookingMovie = () => {
  return (
    <>
      <Navbar></Navbar>
      <div>
        <Container>
          <Outlet></Outlet>
        </Container>
      </div>
      <Footer></Footer>
    </>
  );
};

export default BookingMovie;
