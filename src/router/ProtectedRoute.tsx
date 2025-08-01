import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../store/hooks/useAuth";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isAuthenticated, isAuthLoaded } = useAuth();

  if (!isAuthLoaded) return null;

  return isAuthenticated ? children : <Navigate to="/auth/login" replace />;
};

export default ProtectedRoute;
