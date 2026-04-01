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
import PrivateRoute from "../Provider/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <DataBase></DataBase>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://raw.githubusercontent.com/imtiazho/JsonData/refs/heads/main/data.json",
          ).then((res) => res.json()),
        hydrateFallbackElement: (
          <span className="loading loading-dots loading-xl"></span>
        ),
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
        Component: Registration,
      },
    ],
  },
]);

export default router;
