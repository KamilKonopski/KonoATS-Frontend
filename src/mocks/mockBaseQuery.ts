import type { BaseQueryFn } from "@reduxjs/toolkit/query";
import { mockToken } from "./mockData";

export const mockBaseQuery: BaseQueryFn = async (args) => {
  const { url, method, body } = args as any;

  // login
  if (url === "auth/login" && method === "POST") {
    const { email, password } = body;
    if (email === "demo@konoats.com" && password === "demo123") {
      return { data: { token: mockToken } };
    }
    return { error: { status: 401, data: { message: "Invalid credentials" } } };
  }

  return { error: { status: 404, data: "Not implemented in mock" } };
};
