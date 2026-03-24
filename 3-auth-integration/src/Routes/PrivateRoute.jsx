import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);

  if(loading)
  {
    return <span className="loading loading-ring loading-xl w-[400px] h-[100vh]"></span>
  }
  if (!user) {
    return <Navigate state={location?.pathname} to="/login" ></Navigate>;
  }

  return children;
};

export default PrivateRoute;
