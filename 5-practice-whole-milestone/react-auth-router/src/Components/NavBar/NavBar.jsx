import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../Context/AuthContext";

const NavBar = () => {
  const { user, logOut, loading } = use(AuthContext);
  const navigate = useNavigate();

  const signOutUser = () => {
    logOut().then().catch();
    navigate('/auth/login')
  };

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
          src={user ? user?.photoURL : userIcon}
          alt=""
        />
        {user ? (
          <button
            onClick={signOutUser}
            className="btn btn-primary px-6 text-white rounded-none tracking-[1px]"
          >
            Sign Out
          </button>
        ) : (
          <Link
            to="/auth/login"
            className="btn btn-primary px-6 text-white rounded-none tracking-[1px]"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default NavBar;
