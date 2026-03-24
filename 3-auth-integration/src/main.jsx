import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layouts/Root/Root";
import Login from "./Components/Home/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import AuthProvider from "./Context/AuthProvider";
import Orders from "./Components/Orders/Orders";
import Profile from "./Components/Profile/Profile";
import PrivateRoute from "./Routes/PrivateRoute";
import Dashboard from "./Components/Dashboard/Dashboard";

// export const AuthContext = createContext(null);

// const userInfo = {
//   email: "potato@alu.com",
// };

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/orders",
        // Component: Orders,
        element: (
          <PrivateRoute>
            <Orders></Orders>
          </PrivateRoute>
        ),
      },
      {
        path: "/profile",
        // Component: Profile,
        element: (
          <PrivateRoute>
            <Profile></Profile>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoute>
            <Dashboard></Dashboard>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <AuthContext.Provider value={userInfo}>
      <RouterProvider router={router}></RouterProvider>
    </AuthContext.Provider> */}
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
);
