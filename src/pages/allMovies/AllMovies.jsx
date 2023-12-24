import React, { useState } from "react";

const AllMovies = () => {
  const [movies, setMovies] = useState([]);

  fetch("http://localhost:5000/movieList")
    .then((res) => res.json())
    .then((data) => setMovies(data));

  return (
    <div className="border min-h-full">
      <div className="overflow-x-auto">
        <table className="table table-xs">
          <thead>
            <tr className="text-white">
              <th></th>
              <th>Name</th>
              <th>Poster</th>
              <th>Writer</th>
              <th>Rating</th>
              <th>Release Date</th>
              <th>Run Time</th>
            </tr>
          </thead>
          <tbody>
            {movies?.map((movie, index) => (
              <tr className="cursor-pointer pb-3" key={movie._id}>
                <th>{index + 1}</th>
                <th>{movie.name}</th>
                <th>
                  <img className="w-[80px]" src={movie.poster} alt="" />
                </th>
                <th>{movie.Writer}</th>
                <th>{movie.imdb_rating}</th>
                <th>{movie.releaseDate}</th>
                <th>{movie.runtime} min</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMovies;
