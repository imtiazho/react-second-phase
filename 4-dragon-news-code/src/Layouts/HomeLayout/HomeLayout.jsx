import React from "react";
import { Outlet } from "react-router";
import Header from "../../Components/Header/Header";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <section className="leftNav"></section>
      <section className="main">
        <Outlet></Outlet>
      </section>
      <section className="rightNav"></section>
    </div>
  );
};

export default HomeLayout;
