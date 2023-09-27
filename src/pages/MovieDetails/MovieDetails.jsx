import React from "react";
import Container from "../../components/container/Container";
import CircleRating from "../../components/circleRating/CircleRating";

const data = {
  cover: "https://i.ibb.co/BsQrnNL/nun-2-cover.jpg",
  poster: "https://i.ibb.co/5h08N1k/the-nun-ii-2-poster.webp",
  name: "The Nun II",
  storyline:
    "A follow-up to the enigmatic gothic horror about a strong evil that haunts and causes supernatural harm to everybody it comes into contact with. After the events of the first film, the said powerful evil now begins to spread in 1956 throughout a town in France as word gets out that a priest has been violently murdered. A finished contemplative in her novitiate, Sister Irene, begins to investigate the murder, only to find a demon behind it -- the same evil that terrorized her in the original film as a nun -- Valak, whom she once again soon comes to encounter.",
  genre: ["Horror", "Mystery", "Thriller"],
  releaseDate: "8 September, 2023",
  runtime: "1 hour 50 minutes",
  category: ["2D", "3D"],
  language: "English",
  trailer: "https://www.youtube.com/watch?v=QF-oyCwaArU",
  imDb_rating: 8.8,
  director: "Michael Chaves",
  writer: ["Ian Goldberg", "Richard Naing", "Akela Cooper"],
  casts: [
    {
      cast_name: "Jonas Bloquet",
      cast_image:
        "https://static.wikia.nocookie.net/1899-netflix/images/c/c8/Jonas_Bloquet.jpg/revision/latest?cb=20210506172715",
    },
    {
      cast_name: "Jonas Bloquet",
      cast_image:
        "https://static.wikia.nocookie.net/narnia/images/7/79/200px-Susanpevensie.jpg/revision/latest?cb=20110909112859",
    },
    {
      cast_name: "Storm Reid",
      cast_image:
        "https://facts.net/wp-content/uploads/2023/07/47-facts-about-storm-reid-1688396145.jpg",
    },
    {
      cast_name: "Anna Popplewell",
      cast_image:
        "https://static.wikia.nocookie.net/narnia/images/7/79/200px-Susanpevensie.jpg/revision/latest?cb=20110909112859",
    },
  ],
};
const MovieDetails = () => {
  return (
    <div className="">
      <div className="h-[550px] relative">
        <img className="w-full object-cover h-full" src={data?.cover} alt="" />
        <div className="absolute  top-0 bg-[#001232] bg-opacity-80 w-full h-full">
          <Container>
            <div className="h-[550px] flex items-center">
              <div className="grid gird-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full">
                <div className="col-span-1">
                  <div className="w-[400px]">
                    <img
                      className="shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] "
                      src={data?.poster}
                      alt="Main Poster"
                    />
                  </div>
                </div>
                <div className="col-span-2 text-white space-y-4 lg:ml-10">
                  <h2 className="text-6xl ">{data?.name}</h2>
                  <div className="flex items-center py-3 space-x-5">
                    {data?.genre?.map((item, index) => (
                      <span
                        className="bg-[#d42a2a] px-1  text-sm rounded-sm"
                        key={index}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                  <div>
                    <CircleRating rating={data.imDb_rating}></CircleRating>
                  </div>
                  <div className="Other_info">
                    <table className="table">
                      <tbody>
                        <tr className="border-b border-[#2f3f79] md:text-lg">
                          <td className="w-[30%] pl-0 ">Language :</td>
                          <td className="font-light">{data.language}</td>
                        </tr>
                        <tr className="border-b border-[#2f3f79] md:text-lg">
                          <td className="w-[30%] pl-0">Release :</td>
                          <td className="font-light">{data.releaseDate}</td>
                        </tr>
                        <tr className="border-b border-[#2f3f79] md:text-lg">
                          <td className="w-[30%] pl-0">Run Time :</td>
                          <td className="font-light">{data.runtime}</td>
                        </tr>
                        <tr className="border-b border-[#2f3f79] md:text-lg">
                          <td className="w-[30%] pl-0">Director :</td>
                          <td className="font-light">{data.director}</td>
                        </tr>
                        <tr className="border-b border-[#2f3f79] md:text-lg">
                          <td className="w-[30%] pl-0">Writer :</td>
                          <td className="font-light space-x-3">
                            {data?.writer?.map((item, index) => (
                              <span className="" key={index}>
                                {item}
                              </span>
                            ))}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* Movie Story Line */}
      <div className="story_line">
        <Container>
          <div className="space-y-3">
            <h6 className="text-2xl font-light">Story Line</h6>
            <p>{data.storyline}</p>
          </div>
        </Container>
      </div>
      {/* Cast section */}
      <Container>
        <div className="mb-3">
          <h6 className="text-2xl font-light">All Casts</h6>
        </div>
        <div className="flex items-center space-x-5 pb-10">
          {data?.casts?.map((cast, index) => (
            <div key={index}>
              <img
                className="w-[150px] h-[150px] rounded-full"
                src={cast?.cast_image}
                alt=""
              />
              <p className="text-lg mt-3 font-medium">{cast.cast_name}</p>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MovieDetails;
