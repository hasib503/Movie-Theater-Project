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
        path: "/movieDetails",
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
    ],
  },
]);

export default router;
