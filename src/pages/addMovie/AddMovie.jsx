import React from "react";
import DashboardHeading from "../../components/dash-header/DashboardHeading";
import { useForm } from "react-hook-form";
import { useState } from "react";
import Select from "react-select";
import "./style.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from "react-hot-toast";
// import axios from "axios";

const imgbb_hosting_img = import.meta.env.VITE_IMG_HOST;

// Genres
const genres = [
  { value: "Action", label: "Action" },
  { value: "Comedy", label: "Comedy" },
  { value: "Adventure", label: "Adventure" },
  { value: "Drama", label: "Drama" },
  { value: "Horror", label: "Horror" },
];

// Category options
const categories = [
  { value: "2D", label: "2D" },
  { value: "3D", label: "3D" },
];

// Language options
const languages = [
  { value: "English", label: "English" },
  { value: "Hindi", label: "Hindi" },
  { value: "Bangla", label: "Bangla" },
];

const AddMovie = () => {
  const [selectGenres, setSelectGenres] = useState([]);
  const [selectCategory, setSelectCategory] = useState([]);
  const [selectLanguage, setSelectLanguage] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [castData, setCastData] = useState([]);
  const [cast, setCast] = useState([]);
  const [castName, setCastName] = useState("");
  const [castImage, setCastImage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleGenresChange = (selectOption) => {
    setSelectGenres(selectOption);
  };

  const handleCategoryChange = (selectCategoryOpt) => {
    setSelectCategory(selectCategoryOpt);
  };

  const handleLanguageChange = (selectLanguageOpt) => {
    setSelectLanguage(selectLanguageOpt);
  };

  const formatDate = (date) => {
    if (!date) return "";
    const options = { weekday: "short", day: "numeric", month: "long" };
    return date.toLocaleDateString(undefined, options);
  };

  // Handle Cast Data
  const handleAddCast = (e) => {
    e.preventDefault();
    const newCast = [...castData, []];
    setCastData(newCast);
  };

  const handleCastImageUpload = (e) => {
    e.preventDefault();
  };

  const newDate = formatDate(selectedDate);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  // IMAGE HOSTING URL
  const hosted_img_url = `https://api.imgbb.com/1/upload?key=${imgbb_hosting_img}`;

  // Main submit button handler
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.cover[0]);

    fetch(hosted_img_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const coverImageUrl = imgResponse.data.display_url;
          const formData2 = new FormData();
          formData2.append("image", data.poster[0]);

          fetch(hosted_img_url, {
            method: "POST",
            body: formData2,
          })
            .then((res) => res.json())
            .then((imgResponse) => {
              if (imgResponse.success) {
                const posterImageUrl = imgResponse.data.display_url;
                const newMovieData = {
                  cover: coverImageUrl,
                  poster: posterImageUrl,
                  name: data.name,
                  storyline: data.storyline,
                  genres: selectGenres,
                  releaseDate: selectedDate,
                  runtime: data.runtime,
                  category: selectCategory,
                  language: selectLanguage,
                  trailer: data.trailer,
                  imdb_rating: data.rating,
                  Director: data.director,
                  Writer: data.writer,
                  casts: cast,
                };
                fetch("http://localhost:5000/addMovie", {
                  method: "POST",
                  headers: {
                    "content-type": "application/json",
                  },
                  body: JSON.stringify(newMovieData),
                })
                  .then((res) => res.json())
                  .then((data) => {
                    if (data) {
                      toast.success("Movie added successfully");
                      console.log(data);
                    }
                  })
                  .catch((err) => {
                    console.log(err.message);
                  });
              }
            });
        }
      });
  };

  const handleCast = (e) => {
    e.preventDefault();

    const formData3 = new FormData();
    formData3.append("image", castImage);
    fetch(hosted_img_url, {
      method: "POST",
      body: formData3,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const castImageUrl = imgResponse.data.display_url;
          const newCast = { name: castName, url: castImageUrl };

          setCast([...cast, newCast]);
        }
      });
  };

  return (
    <div className="">
      <div className="mb-5">
        <DashboardHeading title={"Add Movie"}></DashboardHeading>
      </div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 lg:gap-10">
            <div className="">
              {/* Name */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Name</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="text"
                  placeholder="Movie name"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-600">Name is required</span>
                )}
              </div>
              {/* Poster */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Poster</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="file"
                  placeholder="Movie poster"
                  {...register("poster", { required: true })}
                />
                {errors.poster && (
                  <span className="text-red-600">Poster is required</span>
                )}
              </div>
              {/* Cover */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie cover</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="file"
                  placeholder="Movie cover"
                  {...register("cover", { required: true })}
                />
                {errors.cover && (
                  <span className="text-red-600">Poster is required</span>
                )}
              </div>
              {/* Genres */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Genres</label>
                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      backgroundColor: state.isFocused ? "#1b2e54" : "#1b2e54",
                    }),
                  }}
                  options={genres}
                  value={selectGenres}
                  onChange={handleGenresChange}
                  isMulti={true}
                ></Select>
              </div>
              {/* Release Date */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Release Date</label>
                <DatePicker
                  id="dateInput"
                  selected={selectedDate}
                  onChange={handleDateChange}
                  dateFormat="EEE, d MMMM"
                  showYearDropdown={false}
                  placeholderText="Select a date"
                  className="focus-visible:outline-none text-white glass-bg p-2 w-full"
                />
                {errors.release_date && (
                  <span className="text-red-600">Poster is required</span>
                )}
              </div>
              {/* IMDB Rating */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Rating</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="number"
                  placeholder="Enter rating"
                  {...register("rating", { required: true })}
                />
                {errors.rating && (
                  <span className="text-red-600">Rating is required</span>
                )}
              </div>
              {/* Director */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Director</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="text"
                  placeholder="Enter director"
                  {...register("director", { required: true })}
                />
                {errors.director && (
                  <span className="text-red-600">Director is required</span>
                )}
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
                  {...register("storyline", { required: true })}
                />
                {errors.storyline && (
                  <span className="text-red-600">storyline is required</span>
                )}
              </div>
              {/* Runtime*/}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Runtime</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="text"
                  placeholder="Movie runtime"
                  {...register("runtime", { required: true })}
                />
                {errors.runtime && (
                  <span className="text-red-600">runtime is required</span>
                )}
              </div>
              {/* Category */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Category</label>
                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      backgroundColor: state.isFocused ? "#1b2e54" : "#1b2e54",
                    }),
                  }}
                  options={categories}
                  value={selectCategory}
                  onChange={handleCategoryChange}
                  isMulti={true}
                ></Select>
                {errors.category && (
                  <span className="text-red-600">category is required</span>
                )}
              </div>
              {/* Language */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie language</label>
                <Select
                  styles={{
                    control: (baseStyles, state) => ({
                      ...baseStyles,
                      backgroundColor: state.isFocused ? "#1b2e54" : "#1b2e54",
                    }),
                  }}
                  options={languages}
                  value={selectLanguage}
                  onChange={handleLanguageChange}
                  isMulti={true}
                ></Select>
                {errors.language && (
                  <span className="text-red-600">language is required</span>
                )}
              </div>
              {/* Trailer */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Trailer</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="link"
                  placeholder="Enter link"
                  {...register("trailer", { required: true })}
                />
                {errors.trailer && (
                  <span className="text-red-600">trailer is required</span>
                )}
              </div>
              {/* Writer */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Writer</label>
                <input
                  className="glass-bg focus-visible:outline-none p-2"
                  type="link"
                  placeholder="Enter writer name"
                  {...register("writer", { required: true })}
                />
                {errors.writer && (
                  <span className="text-red-600">writer is required</span>
                )}
              </div>
              {/* Casts */}
              <div className="flex flex-col space-y-2 mb-4">
                <label htmlFor="">Movie Cast</label>
                {castData?.map((cast, index) => (
                  <div
                    onSubmit={handleCastImageUpload}
                    key={index}
                    className="flex flex-row gap-2 duration-300 transition-all"
                  >
                    <input
                      className="glass-bg p-2 border focus-visible:outline-none"
                      type="text"
                      placeholder="Cast name"
                      name="castName"
                      onChange={(e) => setCastName(e.target.value)}
                    />
                    <input
                      className="glass-bg p-1 border focus-visible:outline-none"
                      type="file"
                      placeholder="Cast photo"
                      onChange={(e) => setCastImage(e.target.files[0])}
                    />
                    <button
                      type="submit"
                      onClick={(e) => handleCast(e)}
                      className="border p-1"
                    >
                      upload
                    </button>
                  </div>
                ))}
                <div className="inline-block">
                  <button
                    onClick={(e) => handleAddCast(e)}
                    className="border p-1 "
                  >
                    Add cast
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <button type="submit" className="primary-btn-bg  px-5 py-2">
              Add Movie
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMovie;
