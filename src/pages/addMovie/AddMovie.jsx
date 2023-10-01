import React from "react";
import DashboardHeading from "../../components/dash-header/DashboardHeading";
// import { useForm } from "react-hook-form";

const AddMovie = () => {
  // const {
  //   register,
  //   handleSubmit,
  //   formState: { errors },
  // } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };

  return (
    <div className="">
      <div className="mb-5">
        <DashboardHeading title={"Add Movie"}></DashboardHeading>
      </div>
      <div>
        <form>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-10">
            <div className="">
              {/* Name */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Name</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="text"
                  placeholder="Movie name"
                />
              </div>
              {/* Poster */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Poster</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="text"
                  placeholder="Movie poster"
                />
              </div>
              {/* Cover */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie cover</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="text"
                  placeholder="Movie cover"
                />
              </div>
              {/* Genres */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Genres</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="text"
                  placeholder="Movie genres"
                />
              </div>
              {/* Release Date */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Release Date</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="date"
                  placeholder="Movie release date"
                />
              </div>
              {/* IMDB Rating */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Category</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="text"
                  placeholder="Enter category"
                />
              </div>
            </div>
            {/* Column 2 */}
            <div>
              {/* Storyline */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Storyline</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="text"
                  placeholder="Movie storyline"
                />
              </div>
              {/* Runtime*/}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Runtime</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="time"
                  placeholder="Movie runtime"
                />
              </div>
              {/* Category */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Category</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="text"
                  placeholder="Enter category"
                />
              </div>
              {/* Language */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie language</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="text"
                  placeholder="Enter language"
                />
              </div>
              {/* Trailer */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Trailer</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="link"
                  placeholder="Enter link"
                />
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
