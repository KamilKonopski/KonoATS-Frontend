export type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
  isAuthLoaded: boolean;
  error: string | null;
};

export interface LoginRequest {
  email: string;
  password: string;
  remember: boolean;
}

export interface LoginResponse {
  token: string;
}

export interface User {
  id: string;
  email: string;
  name?: string;
}
