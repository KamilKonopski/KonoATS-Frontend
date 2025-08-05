import {
  createSlice,
  type PayloadAction,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import type { AuthState } from "./authApi.types";
import {
  setAuthStorage,
  clearAuthStorage,
  getAuthFromStorage,
} from "./authStorage";

// Tymczasowe dane logowania (dev only)
const VALID_USER = {
  email: "test.rekruter@firma.com",
  password: "testowehaslo123$11",
};

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  error: null,
  isAuthLoaded: false,
};

const authApi = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(
      state,
      action: PayloadAction<{
        email: string;
        password: string;
        remember?: boolean;
      }>
    ) {
      const { email, password, remember } = action.payload;

      if (email === VALID_USER.email && password === VALID_USER.password) {
        const fakeToken = "mocked-jwt-token";
        authApi.caseReducers.loginSuccess(state, {
          type: "auth/loginSuccess",
          payload: { token: fakeToken, remember },
        });
      } else {
        state.isAuthenticated = false;
        state.token = null;
        state.error = "Nieprawidłowe dane logowania.";
        state.isAuthLoaded = true;
      }
    },

    loginSuccess: (
      state,
      action: PayloadAction<{ token: string; remember?: boolean }>
    ) => {
      const { token, remember = true } = action.payload;
      state.isAuthenticated = true;
      state.token = token;
      state.error = null;
      state.isAuthLoaded = true;

      setAuthStorage(token, remember);
    },

    logout(state) {
      state.isAuthenticated = false;
      state.token = null;
      state.error = null;
      state.isAuthLoaded = true;

      clearAuthStorage();
    },

    authChecked(state) {
      state.isAuthLoaded = true;
    },
  },
});

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { dispatch }) => {
    const { token, remember } = getAuthFromStorage();

    if (token) {
      dispatch(loginSuccess({ token, remember }));
    }

    dispatch(authChecked());
  }
);

export const { login, logout, loginSuccess, authChecked } = authApi.actions;
export default authApi.reducer;
