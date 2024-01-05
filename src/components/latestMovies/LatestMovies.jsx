import React from "react";
import Container from "../container/Container";
import { useQuery } from "react-query";
import axios from "axios";
import PrimaryBtn from "../primaryBtn/PrimaryBtn";
import { Link } from "react-router-dom";

const LatestMovies = () => {
  const { data: latestMoves, isLoading } = useQuery({
    queryKey: ["latestMovies"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/latestMovies");
      return res.data;
    },
  });
  return (
    <div>
      <Container>
        <div>
          <div>
            <h2 className="text-2xl lg:text-5xl font-semibold mb-8 mt-16 text-slate-400">
              Latest Movies
            </h2>
          </div>
          <div className="grid grid-cols-3 gap-16">
            {isLoading ? (
              <div>
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              latestMoves?.map((movie, index) => (
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
                      <p className="glass-bg p-3">
                        Release: {movie.releaseDate}
                      </p>
                      <p className="glass-bg p-3">
                        IMDB Rating: {movie.imdb_rating}
                      </p>
                    </div>
                    <div className="my-8">
                      <Link
                        className="primary-btn-bg uppercase px-7 rounded py-2 font-medium text-sm duration-500"
                        to={`/movieDetails/${movie._id}`}
                      >
                        See Details
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

export default LatestMovies;
