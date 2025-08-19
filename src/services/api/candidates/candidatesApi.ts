import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mockCandidatesQuery } from "../../../mocks/api/mockCandidatesQuery";
import { getStoredToken } from "../../../store/auth/authStorage";
import type { Candidate } from "../../types/candidates";

const isMock = import.meta.env.VITE_USE_MOCK === "true";

export const candidatesApi = createApi({
  reducerPath: "candidatesApi",
  baseQuery: isMock
    ? mockCandidatesQuery
    : fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        prepareHeaders: (headers) => {
          const token = getStoredToken();
          if (token) headers.set("Authorization", `Bearer ${token}`);
          return headers;
        },
      }),
  endpoints: (builder) => ({
    getAllCandidates: builder.query<Candidate[], void>({
      query: () => ({ url: "candidates", method: "GET" }),
      transformErrorResponse: (response: Candidate[]) => response || [],
    }),
    getLimitedCandidates: builder.query<Candidate[], number>({
      query: (limit) => ({
        url: "candidates",
        method: "GET",
        params: { limit },
      }),
    }),
    getRecentlyAddedCandidates: builder.query<Candidate[], number | void>({
      query: (limit = 5) => ({
        url: "candidates",
        method: "GET",
        params: {
          sortBy: "createdAt",
          limit,
        },
      }),
    }),
  }),
});

export const {
  useGetAllCandidatesQuery,
  useGetLimitedCandidatesQuery,
  useGetRecentlyAddedCandidatesQuery,
} = candidatesApi;
