import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { candidates } from "../data/mockCandidatesData";

export const mockCandidatesQuery: BaseQueryFn = async (args) => {
  const { url, method, params } = args as any;

  if (url === "candidates" && method === "GET") {
    let filteredCandidate = [...candidates];

    if (params?.limit) {
      filteredCandidate = filteredCandidate.slice(0, Number(params.limit));
    }

    if (params?.sortBy === "createdAt") {
      filteredCandidate.sort(
        (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
    }

    return { data: filteredCandidate };
  }

  return { error: { status: 404, data: "Nie zaimplementowano w mocku" } };
};
