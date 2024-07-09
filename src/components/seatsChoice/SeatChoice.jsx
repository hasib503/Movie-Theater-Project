import axios from "axios";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { useContext, useState } from "react";
import { TbArmchair } from "react-icons/tb";
import "./seats.css";
import { AuthContext } from "../../provider/AuthProvider";
import toast from "react-hot-toast";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

const SeatChoice = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // const [axiosSecure] = useAxiosSecure();
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [selectedShowtime, setSelectedShowtime] = useState("morning");

  const [value, onChange] = useState(new Date());

  const { data: showingMovie } = useQuery({
    queryKey: ["showingMovie"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/bookingSeats/${id}`);
      return res.data;
    },
  });

  const { showtime = [] } = showingMovie || {};

  const handleShowtime = (e) => {
    setSelectedShowtime(e.target.value);
  };

  // Handle Seat selection button here:
  const handleSeatBook = (index) => {
    if (!user) {
      toast.error("Login required!");
      return navigate("/login");
    }
    const alreadySelected = selectedSeats.includes(index);
    if (alreadySelected) {
      const removedSelection = selectedSeats.filter((seat) => seat !== index);
      setSelectedSeats([...removedSelection]);
    } else {
      setSelectedSeats((prev) => [...prev, index]);
    }
  };

  // Handle seat booking button here:
  const handleBooking = () => {
    selectedSeats?.length <= 0 ? toast.error("Select a seat first.") : null;
    const bookingInfo = {
      userName: user?.displayName,
      userEmail: user?.email,
      showingMovie: showingMovie?.name,
      moviePoster: showingMovie?.poster,
      date: value,
      showtime: selectedShowtime,
      selectedSeats: selectedSeats,
    };
  };

  return (
    <div className="flex flex-col gap-10">
      <div className=" lg:h-[500px]">
        <img
          className="h-full w-full object-cover"
          src={showingMovie?.poster}
          alt="Main Poster"
        />
      </div>

      <div className="flex flex-col gap-10">
        <h2 className="text-4xl bg-gradient-to-r from-[#d42a2a] to-[#rgb(0 18 50)] font-light inline-block px-3 py-0.5">
          {showingMovie?.name}
        </h2>

        <div className="grid grid-cols-3 md:gap-8 lg:gap-10">
          <div className="col-span-3 md:col-span-1 flex flex-col gap-5">
            {/* Date Option */}
            <div>
              <Calendar
                className="hover:text-black text-white"
                onChange={onChange}
                value={value}
              />
            </div>
          </div>

          <div className="col-span-3 md:col-span-2 flex flex-col gap-5">
            {/* Showtime */}
            <div className="flex gap-5">
              <h4 className="text-xl">Showtime : </h4>
              <select
                className="bg-transparent border rounded-md p-1 text-white"
                value={selectedShowtime}
                onChange={handleShowtime}
              >
                {showtime?.map((item, index) => (
                  <option
                    className="bg-transparent cursor-pointer text-black"
                    key={index}
                    value={item}
                  >
                    {item}
                  </option>
                ))}
              </select>
            </div>
            {/* Available Seats system here */}
            <div className="flex gap-5 items-center">
              <h4 className="text-xl">Available Seats : </h4>
              <p className="flex flex-col items-center">
                <TbArmchair className=" text-red-600" />
                <span className=" text-red-600">Booked</span>
              </p>
              <p className="flex flex-col items-center">
                <TbArmchair />
                <span>Available</span>
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-between">
              {showingMovie?.availableSeats?.map((item, index) => (
                <div
                  key={index}
                  className={`p-2 cursor-pointer hover:bg-blue-900 ${
                    selectedSeats?.includes(index + 1)
                      ? "bg-blue-700 bg-opacity-100"
                      : "bg-blue-950 bg-opacity-30"
                  }   rounded-md`}
                >
                  {item ? (
                    <div
                      onClick={() => handleSeatBook(index + 1)}
                      className="flex flex-col items-center w-10"
                    >
                      <TbArmchair />
                      <span>C-{index + 1}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col items-center cursor-not-allowed w-10">
                      <TbArmchair className=" text-red-600" />
                      <span className="text-red-600">C-{index + 1}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
            {/* Confirm booking area */}
            <button
              onClick={() => handleBooking()}
              className="primary-btn-bg p-2 rounded-sm"
            >
              Get booking
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatChoice;
