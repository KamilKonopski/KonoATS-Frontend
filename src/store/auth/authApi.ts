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
  userEmail: null,
  token: null,
  error: null,
  isAuthLoaded: false,
};

const authApi = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action: PayloadAction<{ email: string; password: string }>) {
      const { email, password } = action.payload;

      if (email === VALID_USER.email && password === VALID_USER.password) {
        const fakeToken = "mocked-jwt-token";
        authApi.caseReducers.loginSuccess(state, {
          type: "auth/loginSuccess",
          payload: { email, token: fakeToken },
        });
      } else {
        state.isAuthenticated = false;
        state.userEmail = null;
        state.token = null;
        state.error = "Nieprawidłowe dane logowania.";
        state.isAuthLoaded = true;
      }
    },

    loginSuccess: (
      state,
      action: PayloadAction<{ email: string; token: string }>
    ) => {
      const { email, token } = action.payload;
      state.isAuthenticated = true;
      state.userEmail = email;
      state.token = token;
      state.error = null;
      state.isAuthLoaded = true;

      setAuthStorage(email, token);
    },

    logout(state) {
      state.isAuthenticated = false;
      state.userEmail = null;
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
    const { token, email } = getAuthFromStorage();

    if (token && email) {
      dispatch(loginSuccess({ email, token }));
    }

    dispatch(authChecked());
  }
);

export const { login, logout, loginSuccess, authChecked } = authApi.actions;
export default authApi.reducer;
