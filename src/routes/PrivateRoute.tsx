import { Navigate } from "react-router-dom";
import type { ReactElement } from "react";

const PrivateRoute = ({ children }: { children: ReactElement }) => {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
