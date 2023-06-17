import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const PrivateRouter = ({ children }) => {
  const location = useLocation();
  const { currentUser } = useSelector((state) => state.user);
  const isAuth = currentUser?._id;
  return isAuth ? (
    children
  ) : (
    <Navigate to="/" replace state={{ from: location }} />
  );
};
