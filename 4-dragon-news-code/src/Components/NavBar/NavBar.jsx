import React from "react";
import { Link, NavLink } from "react-router";
import user from "../../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className=""></div>
      <div className="nav flex items-center gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="loginBtn flex items-center gap-3">
        <img src={user} alt="" />
        <Link to='/login' className="btn btn-primary px-6 text-white rounded-none tracking-[1px]">
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
