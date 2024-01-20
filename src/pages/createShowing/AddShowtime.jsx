import React from "react";
import DashboardHeading from "../../components/dash-header/DashboardHeading";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import axios from "axios";
import { useForm } from "react-hook-form";

const AddShowtime = () => {
  const { id } = useParams();
  const { data: showtimeMovie } = useQuery({
    queryKey: ["showtimeMovie"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/addShowtime/${id}`);
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const showingMovie = {
      name: showtimeMovie?.name,
      poster: showtimeMovie?.poster,
      showingStatus: data?.status,
      availableSeats: data?.seats,
      showTime: [data?.morning, data?.afternoon, data?.evening],
      movieId: showtimeMovie._id,
    };
    fetch("http://localhost:5000/addShowtimeMovie", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(showingMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("Movie added successfully");
          console.log(data);
        } else {
          alert("The movie already added!");
        }
      })
      .catch((err) => {
        console.log(err.message);
        alert(err.message);
      });
  };

  return (
    <div>
      <DashboardHeading title={"Add Showtime"}></DashboardHeading>
      <div>
        <div className=" flex flex-col items-center">
          {/* Movie poster */}
          <div className=" w-[300px]">
            <img src={showtimeMovie?.poster} alt="" />
          </div>
          {/* Movie Content Edit area */}
          <div className=" w-full">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="Other_info">
                <table className="table">
                  <tbody>
                    <tr className="border-b border-[#2f3f79] md:text-lg">
                      <td className="w-[30%] pl-0 ">Movie Name :</td>
                      <td className="font-bold text-yellow-300 ">
                        {showtimeMovie?.name}
                      </td>
                    </tr>
                    <tr className="border-b border-[#2f3f79] md:text-lg">
                      <td className="w-[30%] pl-0">Now Showing :</td>
                      <td className="font-light">
                        <input
                          type="checkbox"
                          className="toggle toggle-secondary"
                          {...register("status", { required: true })}
                        />
                        {errors.status && (
                          <span className="text-red-600 ml-5">
                            Showing required true
                          </span>
                        )}
                      </td>
                    </tr>
                    <tr className="border-b border-[#2f3f79] md:text-lg">
                      <td className="w-[30%] pl-0">Available seats :</td>
                      <td className="flex space-x-5">
                        <input
                          type="radio"
                          name="radio-1"
                          className="radio radio-primary"
                          checked
                          value="80"
                          {...register("seats")}
                        />{" "}
                        <span className="ml-2">80</span>
                        <input
                          type="radio"
                          name="radio-1"
                          value="100"
                          className="radio radio-primary"
                          {...register("seats")}
                        />
                        <span className="ml-2">100</span>
                      </td>
                    </tr>
                    <tr className="border-b border-[#2f3f79] md:text-lg">
                      <td className="w-[30%] pl-0 ">Show Time :</td>
                      <td className="">
                        <span className="flex items-center space-x-5">
                          <input
                            type="checkbox"
                            // checked="checked"
                            className="checkbox checkbox-primary"
                            value="morning"
                            {...register("morning")}
                          />
                          <p>Morning</p>
                        </span>
                        <span className="flex items-center space-x-5">
                          <input
                            type="checkbox"
                            // checked="checked"
                            className="checkbox checkbox-primary"
                            value="afternoon"
                            {...register("afternoon")}
                          />
                          <p>Afternoon</p>
                        </span>
                        <span className="flex items-center space-x-5">
                          <input
                            type="checkbox"
                            // checked="checked"
                            className="checkbox checkbox-primary"
                            value="evening"
                            {...register("evening")}
                          />
                          <p>Evening</p>
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="my-5">
                  <button
                    type="submit"
                    className="relative inline-block px-4 py-2 font-medium group"
                  >
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full primary-btn-bg border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-white group-hover:text-white">
                      Start Showing
                    </span>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddShowtime;
