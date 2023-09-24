import React from "react";
import Container from "../../components/container/Container";

const data = {
  cover: "https://i.ibb.co/BsQrnNL/nun-2-cover.jpg",
  poster: "https://i.ibb.co/5h08N1k/the-nun-ii-2-poster.webp",
  name: "The Nun II",
  storyline:
    "A follow-up to the enigmatic gothic horror about a strong evil that haunts and causes supernatural harm to everybody it comes into contact with. After the events of the first film, the said powerful evil now begins to spread in 1956 throughout a town in France as word gets out that a priest has been violently murdered. A finished contemplative in her novitiate, Sister Irene, begins to investigate the murder, only to find a demon behind it -- the same evil that terrorized her in the original film as a nun -- Valak, whom she once again soon comes to encounter.",
  genre: ["Horror", "Mystery", "Thriller"],
  cast1: [],
  cast2: [
    "Jonas Bloquet",
    "https://static.wikia.nocookie.net/1899-netflix/images/c/c8/Jonas_Bloquet.jpg/revision/latest?cb=20210506172715",
  ],
  cast3: [
    "Storm Reid",
    "https://facts.net/wp-content/uploads/2023/07/47-facts-about-storm-reid-1688396145.jpg",
  ],
  cast4: [
    "Anna Popplewell",
    "https://static.wikia.nocookie.net/narnia/images/7/79/200px-Susanpevensie.jpg/revision/latest?cb=20110909112859",
  ],
  releaseDate: "8 September, 2023",
  runtime: "1 hour 50 minutes",
  category: ["2D", "3D"],
  language: "English",
  trailer: "https://www.youtube.com/watch?v=QF-oyCwaArU",
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
      <div className="h-[500px] relative">
        <img className="w-full object-cover h-full" src={data.cover} alt="" />
        <div className="absolute  top-0 bg-[#001232] bg-opacity-60 w-full h-full">
          <Container>
            <div className="h-full pt-8">
              <div className="grid gird-cols-1 md:grid-cols-1 lg:grid-cols-2  backdrop-blur-sm rounded-xl">
                <div className="">
                  <div className=" w-[300px]">
                    <img
                      className="rounded-xl"
                      src={data?.poster}
                      alt="Main Poster"
                    />
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl text-light">{data?.name}</h2>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
      {/* Cast section */}
      <Container>
        <div className="backdrop-blur-lg">
          {data?.casts?.map((cast, index) => (
            <p key={index}>{cast.cast_name}</p>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default MovieDetails;
