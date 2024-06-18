import React from "react";
import SectionHeading from "../sectionHeading/SectionHeading";
import Container from "../container/Container";
import { useQuery } from "react-query";
import axios from "axios";
import Button from "../Common/Button";

const NowShowingMovies = () => {
  const { data: nowShowingMovies, isLoading } = useQuery({
    queryKey: ["nowShowingMovies"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/nowShowingMovies");
      return res.data;
    },
  });

  return (
    <div className="now_showing_movies">
      <Container>
        {/* Section Heading */}
        <SectionHeading title={"Now Showing"}></SectionHeading>
        {/* Main Content */}
        <div className="grid grid-cols-3">
          {isLoading ? (
            <div>
              <span className="loading loading-spinner loading-lg animate-pulse">
                Loading...
              </span>
            </div>
          ) : (
            nowShowingMovies?.map((movie, index) => (
              <div key={index}>
                <div className="md:h-[300px]">
                  <img className="h-full w-full" src={movie.poster} alt="" />
                </div>
                <div className="mt-5 space-y-5">
                  <h3 className="text-3xl">{movie.name}</h3>
                </div>
                <div className="my-8">
                  <Button
                    path={`/bookingMovie/${movie._id}`}
                    clickable={false}
                    size="medium"
                    title="Get Ticket"
                    variant="primary"
                  />
                </div>
              </div>
            ))
          )}
        </div>
      </Container>
    </div>
  );
};

export default NowShowingMovies;
