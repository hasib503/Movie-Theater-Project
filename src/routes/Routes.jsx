import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from "./../pages/SignUp/SignUp";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import NewsDetails from './../components/news/NewsDetails';
import AboutUs from "../pages/AboutUs/AboutUs";

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
        loader: ({ params }) => fetch(`http://localhost:5000/movieNewsList/${params.id}`)
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
    ],
  },
]);

export default router;
