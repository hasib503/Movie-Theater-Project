import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "./../pages/SignUp/SignUp";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import NewsDetails from './../components/news/NewsDetails';
import ShowTime from "../pages/showTime/ShowTime";
import TicketPrice from "../pages/ticketPrice/TicketPrice";
import Membership from "../pages/membership/Membership";
import FoodCorner from "../pages/foodCorner/FoodCorner";
import AboutUs from "../pages/aboutUs/AboutUs";
import Dashboard from "../layouts/Dashboard";
import AddMovie from "../pages/addMovie/AddMovie";
import AllMovies from "../pages/allMovies/AllMovies";
import CreateShowingMovies from "../pages/createShowing/CreateShowingMovies";
import AddShowtime from "../pages/createShowing/AddShowtime";
import BookingMovie from "../components/bookingMovie/BookingMovie";
import SeatChoice from "../components/seatsChoice/SeatChoice";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about-us",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/newsDetails/:id",
        element: <NewsDetails></NewsDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/movieNewsList/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/movieDetails/:id",
        element: <MovieDetails></MovieDetails>,
      },
      {
        path: "/showTime",
        element: <ShowTime></ShowTime>,
      },
      {
        path: "/ticketPrice",
        element: <TicketPrice></TicketPrice>,
      },
      {
        path: "/membership",
        element: <Membership></Membership>,
      },
      {
        path: "/foodCorner",
        element: <FoodCorner></FoodCorner>,
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "/dashboard/addMovie",
        element: <AddMovie></AddMovie>,
      },
      {
        path: "/dashboard/allMovies",
        element: <AllMovies></AllMovies>,
      },
      {
        path: "/dashboard/createShowingMovies",
        element: <CreateShowingMovies></CreateShowingMovies>,
      },
      {
        path: "/dashboard/addShowTime/:id",
        element: <AddShowtime></AddShowtime>,
      },
    ],
  },
  {
    path: "/bookingMovie",
    element: <BookingMovie></BookingMovie>,
    children: [
      {
        path: "/bookingMovie/:id",
        element: <SeatChoice></SeatChoice>,
      },
    ],
  },
]);

export default router;
