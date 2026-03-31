import React from "react";
import NavBar from "../Components/NavBar/NavBar";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="w-[90%] mx-auto">
      <NavBar></NavBar>
      <Outlet></Outlet>
    </div>
  );
};

export default HomeLayout;
