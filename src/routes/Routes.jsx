import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/home/Home";
import ErrorPage from "../pages/errorPage/ErrorPage";
import Login from "../pages/Login/Login";
import SignUp from './../pages/SignUp/SignUp';

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
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

export default router;
