import React from "react";
import Container from "../../components/container/Container";
import { PiArmchairLight } from "react-icons/pi";

const TicketPrice = () => {

  let movieTickets = [
    {
      id: 1,
      serial: "A1",
      status: "empty",
      showTime: 3,
      movie: "Example Movie",
      time: "19:00",
      date: "2024-07-05",
      price: 12.5,
      coustomer: ["id1", "name1"],
      trxId: "trxID1"
    },
    {
      id: 2,
      serial: "A2",
      status: "empty",
      showTime: 3,
      movie: "Example Movie",
      time: "19:00",
      date: "2024-07-05",
      price: 12.5,
      coustomer: ["id2", "name2"],
      trxId: "trxID2"
    },
    {
      id: 3,
      serial: "A3",
      status: "empty",
      showTime: 3,
      movie: "Example Movie",
      time: "19:00",
      date: "2024-07-05",
      price: 12.5,
      coustomer: ["id3", "name3"],
      trxId: "trxID3"
    },
    {
      id: 4,
      serial: "A4",
      status: "booked",
      showTime: 3,
      movie: "Example Movie",
      time: "19:00",
      date: "2024-07-05",
      price: 12.5,
      coustomer: ["id4", "name4"],
      trxId: "trxID4"
    },
    {
      id: 5,
      serial: "A5",
      status: "empty",
      showTime: 3,
      movie: "Example Movie",
      time: "19:00",
      date: "2024-07-05",
      price: 12.5,
      coustomer: ["id5", "name5"],
      trxId: "trxID5"
    }
  ]


  const handleClickOnTicket = (ticket) => {
    if (ticket.status = "booked") {
      console.log(`Sorry, ticket numbere ${ticket.seat} is already booked`);
    } else {
      console.log(`Ticket number ${ticket.seat} is available for booking !`);
    }

  }

  return (
    <div className="min-h-[50vh]">
      <Container>
        <div className="mx-4 flex">
          {
            movieTickets.map((ticket) => {
              return (
                <div onClick={() => handleClickOnTicket(ticket)} key={ticket.id}
                  className={ticket.status == "booked" ? `m-2 p-1 border rounded-md border-yellow-600 bg-yellow-500 text-slate-900 cursor-not-allowed` : `m-2 p-1 border rounded-md border-sky-100 cursor-pointer`}
                ><PiArmchairLight className="h-6 w-6" />
                </div>

              )
            })


          }


        </div>

      </Container>
    </div>
  );
};

export default TicketPrice;
