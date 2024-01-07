import React from "react";
import SectionHeading from "../sectionHeading/SectionHeading";
import Container from "../container/Container";

const NowShowingMovies = () => {
  return (
    <div className="now_showing_movies">
      <Container>
        {/* Section Heading */}
        <SectionHeading title={"Now Showing"}></SectionHeading>
        {/* Main Content */}
      </Container>
    </div>
  );
};

export default NowShowingMovies;
