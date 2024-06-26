import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import DashboardHeading from "../../components/dash-header/DashboardHeading";

const AllMovies = () => {
  // const [movies, setMovies] = useState([]);
  const { data: movies = [], isLoading } = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/movieList");
      return res.data;
    },
  });

  console.log(movies);

  return (
    <div className=" min-h-full">
      <div className="mb-5">
        <DashboardHeading title={"All Movies"}></DashboardHeading>
      </div>
      <div className="overflow-x-auto border">
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
            {isLoading ? (
              <div className="">
                <span className="loading loading-infinity loading-lg"></span>
              </div>
            ) : (
              movies?.map((movie, index) => (
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
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllMovies;
