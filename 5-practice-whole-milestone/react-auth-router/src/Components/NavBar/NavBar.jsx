import React from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between mt-12">
      <div className=""></div>
      <div className="nav flex items-center gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="loginBtn flex items-center gap-3">
        <img
          className="w-[50px] rounded-full h-[50px] object-cover"
          src={userIcon}
          alt=""
        />
        <Link
          to=""
          className="btn btn-primary px-6 text-white rounded-none tracking-[1px]"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
