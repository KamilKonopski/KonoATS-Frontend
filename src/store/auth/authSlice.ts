import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./authApi.types";
import { clearAuthStorage, getStoredToken } from "./authStorage";

const initialState: AuthState = {
  token: getStoredToken(),
  isAuthenticated: !!getStoredToken(),
  isAuthLoaded: true,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ token: string; remember: boolean }>) {
      state.token = action.payload.token;
      state.isAuthenticated = true;
      state.error = null;
    },
    logout(state) {
      clearAuthStorage();
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, logout, setError } = authSlice.actions;
export default authSlice.reducer;
