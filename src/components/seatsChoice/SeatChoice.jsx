import axios from "axios";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";

const SeatChoice = () => {
  const { id } = useParams();
  const { data: selectedMovie } = useQuery({
    queryKey: ["showtimeMovie"],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:5000/bookingSeats/${id}`);
      return res.data;
    },
  });

  return (
    <div>
      <div className="h-[550px] flex items-center">
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

          <div className=" col-span-3 lg:col-span-2 text-white space-y-4 lg:pl-10 mt-10 md:mt-0 flex items-center ">
            <div className="w-full">
              <h2 className="md:text-6xl text-4xl">{selectedMovie?.name}</h2>
              <div className="flex items-center py-3 space-x-5">
                {selectedMovie?.genre?.map((item, index) => (
                  <span
                    className="bg-[#d42a2a] px-1  text-sm rounded-sm"
                    key={index}
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="Other_info"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SeatChoice;
