import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "../services/api/auth/authApi";
import { offertsApi } from "../services/api/offerts/offertsApi";
import authReducer from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [authApi.reducerPath]: authApi.reducer,
    [offertsApi.reducerPath]: offertsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware).concat(offertsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
