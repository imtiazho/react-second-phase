import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import PrivateRoute from "../Provider/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
      {
        path: "/",
        Component: Home,
      },
      {
        path: "/category/:id",
        Component: CategoryNews,
        loader: () => fetch("/public/news.json"),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/news-details/:id",
    element: (
      <PrivateRoute>
        <NewsDetails></NewsDetails>
      </PrivateRoute>
    ),
    loader: () => fetch("/public/news.json"),
  },
  {
    path: "*",
    element: <h1>Error Layout</h1>,
  },
]);

export default router;
