import React from "react";
import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Registration from "../Components/Registration/Registration";
import Login from "../Components/Login/Login";
import HomeContentOne from "../Components/HomeContentOne/HomeContentOne";
import About from "../Components/About/About";
import Career from "../Components/Career/Career";
import AuthLayout from "../Layouts/AuthLayout";
import DataBase from "../Components/DataBase/DataBase";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        index: true,
        Component: HomeContentOne,
      },
      {
        path: "/about",
        Component: About,
      },
      {
        path: "/career",
        Component: Career,
      },
      {
        path: "/data",
        Component: DataBase,
      }
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
        Component: Registration,
      },
    ],
  },
]);

export default router;
