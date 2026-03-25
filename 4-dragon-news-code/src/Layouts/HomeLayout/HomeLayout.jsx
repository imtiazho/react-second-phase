import React from "react";
import { Outlet } from "react-router";
import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews/LatestNews";
import NavBar from "../../Components/NavBar/NavBar";

const HomeLayout = () => {
  return (
    <div className="w-[90%] mx-auto">
      <header>
        <Header></Header>
      </header>
      <section className="mt-6 mb-3">
        <LatestNews></LatestNews>
      </section>
      <nav>
        <NavBar></NavBar>
      </nav>
      <section className="leftNav"></section>
      <section className="main">
        <Outlet></Outlet>
      </section>
      <section className="rightNav"></section>
    </div>
  );
};

export default HomeLayout;
