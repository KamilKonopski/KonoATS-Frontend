import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { jobOffers } from "../data/mockOffertsData";

export const mockOffertsQuery: BaseQueryFn = async (args) => {
  const { url, method, params } = args as any;

  if (url === "job-offerts" && method === "GET") {
    let filteredOffers = [...jobOffers];

    if (params?.limit) {
      filteredOffers = filteredOffers.slice(0, Number(params.limit));
    }

    if (params?.sortBy === "updatedAt") {
      filteredOffers.sort(
        (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
      );
    }

    return { data: filteredOffers };
  }

  return { error: { status: 404, data: "Nie zaimplementowano w mocku" } };
};
