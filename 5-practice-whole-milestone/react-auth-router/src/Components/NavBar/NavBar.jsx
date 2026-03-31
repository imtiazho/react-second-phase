import React from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";

const NavBar = () => {
  return (
    <div className="flex items-center justify-between mt-12">
      <div className=""></div>
      <div className="nav flex items-center gap-4 text-black">
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-700" : "text-black"
          }
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-700" : "text-black"
          }
          to="/about"
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-700" : "text-black"
          }
          to="/career"
        >
          Career
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-red-700" : "text-black"
          }
          to="/data"
        >
          Database
        </NavLink>
      </div>
      <div className="loginBtn flex items-center gap-3">
        <img
          className="w-[50px] rounded-full h-[50px] object-cover"
          src={userIcon}
          alt=""
        />
        <Link
          to="/auth/login"
          className="btn btn-primary px-6 text-white rounded-none tracking-[1px]"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
