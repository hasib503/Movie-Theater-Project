import React from "react";
import DashboardHeading from "../../components/dash-header/DashboardHeading";
import { useQuery } from "react-query";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateShowingMovies = () => {
  const { data: movies, isLoading } = useQuery({
    queryKey: ["allMovies"],
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/movieList");
      return res.data;
    },
  });
  return (
    <div>
      <DashboardHeading title={"Create Showing Movies"}></DashboardHeading>
      {/* Main Table Movie List */}
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-white">
              <tr>
                <th>#</th>
                <th>Poster</th>
                <th>Name</th>
                <th className="text-center">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* All Movies Load Here */}
              {movies?.map((movie, index) => (
                <tr key={movie._id}>
                  <td>{index + 1}</td>
                  <td>
                    <img className="w-[100px]" src={movie.poster} alt="" />
                  </td>
                  <td>{movie.name}</td>
                  <td className=" text-center">
                    <Link className="bg-blue-700 hover:py-2 transition-all duration-100 text-white px-2 py-1 rounded-sm">
                      Now Showing
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CreateShowingMovies;
