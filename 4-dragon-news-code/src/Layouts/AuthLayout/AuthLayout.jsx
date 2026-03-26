import React from "react";
import NavBar from "../../Components/NavBar/NavBar";
import Login from "../../Components/Login/Login";
import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-[95%] mx-auto pt-8">
        <NavBar></NavBar>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default AuthLayout;
