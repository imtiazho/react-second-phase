import React, { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  if(loading)
  {
    return <span className="loading loading-dots loading-xl"></span>
  }
  if (user && user?.email) {
    return children;
  }
  return <Navigate to="/auth/login"></Navigate>;
};
// last class 52_5_7
export default PrivateRoute;
