import React from "react";
import SectionHeading from "../sectionHeading/SectionHeading";
import Container from "../container/Container";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const NowShowingMovies = () => {
  const { data: nowShowingMovies, isLoading } = useQuery({
    queryKey: ["nowShowingMovies"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/nowShowingMovies");
      return res.data;
    },
  });
  console.log(nowShowingMovies);
  return (
    <div className="now_showing_movies">
      <Container>
        {/* Section Heading */}
        <SectionHeading title={"Now Showing"}></SectionHeading>
        {/* Main Content */}
        <div>
          <div className="grid grid-cols-3 gap-16">
            {isLoading ? (
              <div>
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              nowShowingMovies?.map((movie, index) => (
                <div className="" key={index}>
                  <div className="">
                    <div className="md:h-[300px]">
                      <img
                        className="h-full w-full"
                        src={movie.poster}
                        alt=""
                      />
                    </div>
                    <div className="mt-5 space-y-5">
                      <h3 className="text-3xl">{movie.name}</h3>
                    </div>
                    <div className="my-8">
                      <Link
                        className="primary-btn-bg uppercase px-7 rounded py-2 font-medium text-sm duration-500"
                        to={`/bookingMovie/${movie._id}`}
                      >
                        Get Ticket
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default NowShowingMovies;
