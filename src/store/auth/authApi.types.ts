export type AuthState = {
  isAuthenticated: boolean;
  token: string | null;
  error: string | null;
  isAuthLoaded: boolean;
};
