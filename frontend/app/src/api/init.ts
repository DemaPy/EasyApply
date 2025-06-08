import { ApiResponse } from "@/types";

interface Req {
  url: string;
  options?: RequestInit;
  withCredentials?: boolean;
}
export const api = async ({ url, options, withCredentials = true }: Req) => {
  const _options: RequestInit =
    options && options.method === "POST"
      ? {
          ...options,
          ...(withCredentials && { credentials: "include" }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      : {
          ...options,
          ...(withCredentials && { credentials: "include" }),
          method: "GET",
          headers: {
          },
        };
  const response = await fetch(import.meta.env.VITE_BASE_URL + url, _options);
  if (!response.ok) {
    if (response.status === 401) {
      location.href = import.meta.env.VITE_ORIGIN_URL;
    }
    const json: ApiResponse<null> = await response.json();
    const message = json?.message ?? "Api error";
    throw new Error(message);
  }
  if (response.status >= 500) {
    throw new Error("Server error");
  }
  return response.json();
};
