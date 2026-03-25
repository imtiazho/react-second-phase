import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";
import NewsDetails from "../Components/NewsDetails/NewsDetails";
import Login from "../Components/Login/Login";
import Register from "../Components/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout></HomeLayout>,
    children: [
        {
            path: '/',
            Component: Home
        },
        {
            path: '/category/:id',
            Component: CategoryNews,
            loader: () => fetch("/public/news.json")
        },
        {
            path: '/news-details/:id',
            Component: NewsDetails,
            loader: () => fetch("/public/news.json")
        }
    ]
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "*",
    element: <h1>Error Layout</h1>,
  },
]);

export default router;
