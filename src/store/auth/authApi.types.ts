export type AuthState = {
  isAuthenticated: boolean;
  userEmail: string | null;
  token: string | null;
  error: string | null;
  isAuthLoaded: boolean;
};
