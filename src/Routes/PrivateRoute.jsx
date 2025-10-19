import React, { use } from "react";
import { AuthContext } from "../Provider/AuthContext";
import { Navigate, useLocation } from "react-router";
import LoadingPage from "../Pages/LoadingPage";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  // console.log(user);

  const loaction = useLocation();
  // console.log(loaction);

  if (loading) {
    return <LoadingPage></LoadingPage>;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login"></Navigate>;
};

export default PrivateRoute;
