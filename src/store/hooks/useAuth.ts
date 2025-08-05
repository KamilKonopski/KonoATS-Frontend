import { useSelector } from "react-redux";
import type { RootState } from "../store";

export const useAuth = () => {
  const { isAuthenticated, token, error, isAuthLoaded } = useSelector(
    (state: RootState) => state.auth
  );

  return { isAuthenticated, token, error, isAuthLoaded };
};
