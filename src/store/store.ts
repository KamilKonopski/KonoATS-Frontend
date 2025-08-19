import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/api/auth/authApi";
import { candidatesApi } from "../services/api/candidates/candidatesApi";
import { offertsApi } from "../services/api/offerts/offertsApi";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [offertsApi.reducerPath]: offertsApi.reducer,
    [candidatesApi.reducerPath]: candidatesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(authApi.middleware)
      .concat(offertsApi.middleware)
      .concat(candidatesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
