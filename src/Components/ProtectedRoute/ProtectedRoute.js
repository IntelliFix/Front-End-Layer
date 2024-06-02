import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element: Element }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? <Element /> : <Navigate to="/Authentication" />;
};

export default ProtectedRoute;
