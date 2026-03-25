import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout/HomeLayout";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews/CategoryNews";

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
            Component: CategoryNews
        }
    ]
  },
  {
    path: "/auth",
    element: <h1>Auth Layout</h1>,
  },
  {
    path: "/news",
    element: <h1>News Layout</h1>,
  },
  {
    path: "*",
    element: <h1>Error Layout</h1>,
  },
]);

export default router;
