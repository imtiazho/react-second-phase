import React, { useContext } from "react";
import { Link, NavLink } from "react-router";
import userIcon from "../../assets/user.png";
import { AuthContext } from "../../Provider/AuthProvider";

const NavBar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("SignOut");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-between">
      <div className=""></div>
      <div className="nav flex items-center gap-4 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="loginBtn flex items-center gap-3">
        <img className="w-[50px] rounded-full h-[50px] object-cover" src={user ? user?.photoURL: userIcon} alt="" />
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-primary px-6 text-white rounded-none tracking-[1px]"
          >
            SignOut
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
