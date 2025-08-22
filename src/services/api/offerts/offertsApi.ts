import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { mockOffertsQuery } from "../../../mocks/api/mockOffertsQuery";
import { getStoredToken } from "../../../store/auth/authStorage";
import type { JobOffer } from "../../types/offerts";

const isMock = import.meta.env.VITE_USE_MOCK === "true";

export const offertsApi = createApi({
  reducerPath: "offertsApi",
  baseQuery: isMock
    ? mockOffertsQuery
    : fetchBaseQuery({
        baseUrl: import.meta.env.VITE_BASE_URL,
        prepareHeaders: (headers) => {
          const token = getStoredToken();
          if (token) headers.set("Authorization", `Bearer ${token}`);
          return headers;
        },
      }),
  endpoints: (builder) => ({
    getAllOfferts: builder.query<JobOffer[], { search?: string }>({
      query: ({ search }) => ({
        url: "job-offerts",
        method: "GET",
        params: search ? { search } : {},
      }),
      transformErrorResponse: (response: JobOffer[]) => response || [],
    }),
    getLimitedOfferts: builder.query<JobOffer[], number>({
      query: (limit) => ({
        url: "job-offerts",
        method: "GET",
        params: { limit },
      }),
    }),
    getRecentlyUpdatedOfferts: builder.query<JobOffer[], number | void>({
      query: (limit = 5) => ({
        url: "job-offerts",
        method: "GET",
        params: {
          sortBy: "updatedAt",
          limit,
        },
      }),
    }),
  }),
});

export const {
  useGetAllOffertsQuery,
  useGetLimitedOffertsQuery,
  useGetRecentlyUpdatedOffertsQuery,
} = offertsApi;
