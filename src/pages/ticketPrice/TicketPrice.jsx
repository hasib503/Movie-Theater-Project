import React from "react";
import Container from "../../components/container/Container";
import { PiArmchairLight } from "react-icons/pi";

const TicketPrice = () => {

  let movieTickets = [
    {
      "id": 1,
      "status": "empty",
      "movie": "Example Movie",
      "time": "19:00",
      "date": "2024-07-05",
      "seat": "A1",
      "price": 12.5
    },
    {
      "id": 2,
      "status": "empty",
      "movie": "Example Movie",
      "time": "19:00",
      "date": "2024-07-05",
      "seat": "A2",
      "price": 12.5
    },
    {
      "id": 3,
      "status": "empty",
      "movie": "Example Movie",
      "time": "19:00",
      "date": "2024-07-05",
      "seat": "A3",
      "price": 12.5
    },
    {
      "id": 4,
      "status": "booked",
      "movie": "Example Movie",
      "time": "19:00",
      "date": "2024-07-05",
      "seat": "A4",
      "price": 12.5
    },
    {
      "id": 5,
      "status": "empty",
      "movie": "Example Movie",
      "time": "19:00",
      "date": "2024-07-05",
      "seat": "A5",
      "price": 12.5
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
