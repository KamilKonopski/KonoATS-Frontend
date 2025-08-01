import { useSelector } from "react-redux";
import type { RootState } from "../store";

export const useAuth = () => {
  const { isAuthenticated, userEmail, token, error, isAuthLoaded } =
    useSelector((state: RootState) => state.auth);

  return { isAuthenticated, userEmail, token, error, isAuthLoaded };
};
