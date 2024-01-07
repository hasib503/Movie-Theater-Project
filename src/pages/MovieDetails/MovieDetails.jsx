import React, { useEffect, useState } from "react";
import Container from "../../components/container/Container";
import CircleRating from "../../components/circleRating/CircleRating";
import PlayIcon from "../../components/playIcon/PlayIcon";
import "./style.css";
import VideoPopUp from "../../components/VideoPopup/VideoPopUp";
import { useParams } from "react-router-dom";
// import { useQuery } from "react-query";
// import axios from "axios";

const MovieDetails = () => {
  const [show, setShow] = useState(false);
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  // const { data: movieDetails, isLoading } = useQuery({
  //   queryKey: ["movieDetails"],
  //   queryFn: async () => {
  //     const res = await axios.get(`http://localhost:5000/movieDetails/${id}`);
  //     return res.data;
  //   },
  // });
  useEffect(() => {
    fetch(`http://localhost:5000/movieDetails/${id}`)
      .then((res) => res.json())
      .then((data) => setMovieDetails(data));
  }, [id]);
  // movieDetails?.language?.map((item) => console.log(item));

  return (
    <div className="">
      <div className="h-[900px] lg:h-[550px] relative ">
        <img
          className="w-full object-cover h-full"
          src={movieDetails?.cover}
          alt=""
        />
        <div className="absolute  top-0 bg-[#001232] bg-opacity-80 w-full h-full ">
          <Container>
            <div className="h-[550px] flex items-center">
              <div className="grid gird-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full h-full mt-10 lg:mt-0 ">
                <div className="col-span-3 lg:col-span-1">
                  <div className="  h-full flex items-center justify-center">
                    <img
                      className=" shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-[300px]"
                      src={movieDetails?.poster}
                      alt="Main Poster"
                    />
                  </div>
                </div>
                {/* Details content */}
                <div className=" col-span-3 lg:col-span-2 text-white space-y-4 lg:pl-10 mt-10 md:mt-0 flex items-center ">
                  <div className="w-full">
                    <h2 className="md:text-6xl text-4xl">
                      {movieDetails?.name}
                    </h2>
                    <div className="flex items-center py-3 space-x-5">
                      {movieDetails?.genre?.map((item, index) => (
                        <span
                          className="bg-[#d42a2a] px-1  text-sm rounded-sm"
                          key={index}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                    {/* Movie Trailer Icon Part */}
                    <div className="flex items-center gap-5">
                      <CircleRating
                        rating={movieDetails?.imdb_rating}
                      ></CircleRating>
                      <div
                        className="playbtn"
                        onClick={() => {
                          setShow(true);
                        }}
                      >
                        <PlayIcon></PlayIcon>
                        <span className="text">Watch Trailer</span>
                      </div>
                    </div>
                    {/* Genres Part */}
                    <div className="my-5">
                      {movieDetails?.genres?.map((item, index) => (
                        <span
                          key={index}
                          className="bg-[#d42a2a] text-white px-2 py-1 rounded-sm space-x-5"
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                    <div className="Other_info">
                      <table className="table">
                        <tbody>
                          <tr className="border-b border-[#2f3f79] md:text-lg">
                            <td className="w-[30%] pl-0 ">Language :</td>
                            <td className="font-light">
                              {movieDetails?.language?.map(
                                (item) => item.label
                              )}
                            </td>
                          </tr>
                          <tr className="border-b border-[#2f3f79] md:text-lg">
                            <td className="w-[30%] pl-0">Release :</td>
                            <td className="font-light">
                              {movieDetails.releaseDate}
                            </td>
                          </tr>
                          <tr className="border-b border-[#2f3f79] md:text-lg">
                            <td className="w-[30%] pl-0">Run Time :</td>
                            <td className="font-light">
                              {movieDetails.runtime}
                            </td>
                          </tr>
                          <tr className="border-b border-[#2f3f79] md:text-lg">
                            <td className="w-[30%] pl-0">Director :</td>
                            <td className="font-light">
                              {movieDetails?.Director}
                            </td>
                          </tr>
                          <tr className="border-b border-[#2f3f79] md:text-lg">
                            <td className="w-[30%] pl-0">Writer :</td>
                            <td className="font-light space-x-3">
                              {movieDetails?.Writer}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* Movie Story Line */}
      <div className="story_line  my-10">
        <Container>
          <div className="space-y-3">
            <h6 className="text-2xl font-light border-b border-[#2f3f79] pb-2">
              Story Line
            </h6>
            <p>{movieDetails.storyline}</p>
          </div>
        </Container>
      </div>
      {/* Cast section */}
      <Container>
        <div className="mb-3 ">
          <h6 className="text-2xl font-light border-b border-[#2f3f79] pb-2">
            All Casts
          </h6>
        </div>
        <div className=" md:flex space-x-5 pb-10 justify-start  space-y-5 lg:space-y-0 ">
          {movieDetails?.casts?.map((cast, index) => (
            <div
              className=" flex-col justify-center items-center md:me-5"
              key={index}
            >
              <img
                className=" w-[110px] h-[110px] lg:w-[150px] lg:h-[150px] rounded-full"
                src={cast?.url}
                alt=""
              />
              <p className="text-lg mt-3 font-medium text-center">
                {cast.name}
              </p>
            </div>
          ))}
        </div>
      </Container>
      <VideoPopUp show={show} setShow={setShow} videoUrl={movieDetails.trailer}>
        {" "}
      </VideoPopUp>
    </div>
  );
};

export default MovieDetails;
