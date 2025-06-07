import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../contexts/AuthContext";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { currentUser } = use(AuthContext);
  if (!currentUser) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
