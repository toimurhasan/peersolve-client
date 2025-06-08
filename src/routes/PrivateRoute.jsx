import React, { use } from "react";
import { Navigate, useLocation } from "react-router";
import AuthContext from "../contexts/AuthContext";
import Loader from "../components/Loader";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { currentUser, loading } = use(AuthContext);
  if (loading) {
    return <Loader></Loader>;
  }
  if (!currentUser) {
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
  }
  return children;
};

export default PrivateRoute;
