import React from "react";
import { Outlet } from "react-router";
import Header from "../../Components/Header/Header";
import LatestNews from "../../Components/LatestNews/LatestNews";
import NavBar from "../../Components/NavBar/NavBar";
import LeftAside from "../../Components/HomeLayout/LeftAside";
import RightAside from "../../Components/HomeLayout/RightAside";

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

      <main className="mt-6 grid grid-cols-12 gap-5">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main col-span-6">
          <Outlet></Outlet>
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
