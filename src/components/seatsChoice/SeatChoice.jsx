import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useContext, useState } from "react";
import { TbArmchair } from "react-icons/tb";
import "./seats.css";
import { AuthContext } from "../../provider/AuthProvider";

const SeatChoice = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  // console.log(user);
  const [value, onChange] = useState(new Date());
  const { data: selectedMovie } = useQuery({
    queryKey: ["showtimeMovie"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/bookingSeats/${id}`);
      return res.data;
    },
  });

  // Handle seat booking button here:
  const handlebooking = () => {
    const bookingInfo = {
      userName: user?.displayName,
      userEmail: user?.email,
      selectedMovie: selectedMovie?.name,
      moviePoster: selectedMovie?.poster,
      date: value,
    };
    console.log(bookingInfo);
  };

  return (
    <div>
      <div className=" flex items-center">
        <div className="grid gird-cols-1 md:grid-cols-1 lg:grid-cols-3 w-full h-full mt-10 lg:mt-0 ">
          <div className="col-span-3 lg:col-span-1">
            <div className="  h-full flex items-center justify-center">
              <img
                className=" shadow-[rgba(0,_0,_0,_0.25)_0px_25px_50px_-12px] w-[300px]"
                src={selectedMovie?.poster}
                alt="Main Poster"
              />
            </div>
          </div>

          <div className=" col-span-3 lg:col-span-2 text-white space-y-4 lg:pl-10 mt-10 md:mt-0 flex items-center">
            <div className="w-full">
              <h2 className="text-4xl bg-gradient-to-r from-[#d42a2a] to-[#ffffff08] font-light inline-block px-3 py-0.5">
                {selectedMovie?.name}
              </h2>

              {/* Date Option */}
              <div className="mt-10 mb-5 ">
                <Calendar
                  className={`text-white`}
                  onChange={onChange}
                  value={value}
                />
              </div>

              {/* Showtime */}
              <div className="mb-5">
                <div className="flex items-center space-x-10">
                  <h4 className="text-xl">Showtime : </h4>
                  <div className="mt-1 leading-normal">
                    <select className="bg-blue-900" name="" id="">
                      {selectedMovie?.showTime?.map((item, index) => (
                        <option className="" key={index}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              {/* Available Seats system here */}
              <div className="flex space-x-5 mb-10">
                <div>
                  <h4 className="text-xl">Available Seats : </h4>
                </div>
                <div className=" w-full flex flex-wrap ">
                  {selectedMovie?.availableSeats?.map((item, index) => (
                    <div className="m-2 inline text-center" key={index}>
                      {item ? (
                        <p className="flex flex-col items-center">
                          <TbArmchair className="cursor-pointer" />
                          <span>C-{index + 1}</span>
                        </p>
                      ) : (
                        <p className="flex flex-col items-center">
                          <TbArmchair className="cursor-pointer text-red-600" />
                          <span>C-{index + 1}</span>
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Confirm booking area */}
              <div className="">
                <div>
                  <button
                    onClick={handlebooking()}
                    className="primary-btn-bg p-2 rounded-sm"
                  >
                    Get booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatChoice;
