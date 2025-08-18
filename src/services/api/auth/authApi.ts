import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mockAuthQuery } from "../../../mocks/api/mockAuthQuery";
import { loginSuccess } from "../../../store/auth/authSlice";
import { clearAuthStorage, getStoredToken, setAuthStorage } from "../../../store/auth/authStorage";

const isMock = import.meta.env.VITE_USE_MOCK === "true";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: isMock
    ? mockAuthQuery
    : fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        prepareHeaders: (headers) => {
          const token = getStoredToken();

          if (token) headers.set("Authorization", `Bearer ${token}`);
          return headers;
        },
      }),
  endpoints: (builder) => ({
    login: builder.mutation<
      { token: string },
      { email: string; password: string; remember: boolean }
    >({
      query: ({ email, password }) => ({
        url: "auth/login",
        method: "POST",
        body: { email, password },
      }),
      async onQueryStarted({ remember }, { queryFulfilled, dispatch }) {
        try {
          const { data } = await queryFulfilled;
          setAuthStorage(data.token, remember);
          dispatch(loginSuccess({ token: data.token, remember }));
        } catch {
          clearAuthStorage();
        }
      },
    }),

    getMe: builder.query<{ email: string }, void>({
      query: () => "/auth/me",
    }),
  }),
});

export const { useLoginMutation, useGetMeQuery } = authApi;
