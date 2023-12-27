import React from "react";
import Container from "../container/Container";
import { useQuery } from "react-query";
import axios from "axios";

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
          <div className="grid grid-cols-3 gap-10">
            {isLoading ? (
              <div>
                <span className="loading loading-spinner loading-lg"></span>
              </div>
            ) : (
              latestMoves?.map((movie, index) => (
                <div key={index}>
                  <img width={300} height={300} src={movie.poster} alt="" />
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
