import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Root from "./Layouts/Root/Root";
import Login from "./Components/Home/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import AuthProvider from "./Context/AuthProvider";

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
