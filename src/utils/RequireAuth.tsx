import { Navigate } from "react-router-dom";
import type { ReactElement } from "react";

export const RequireAuth = ({ children }: { children: ReactElement }) => {
  const isAuthenticated = localStorage.getItem("token");
  return isAuthenticated ? children : <Navigate to="/" />;
};
