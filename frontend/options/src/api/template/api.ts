import { Context } from "@/types";
import { api } from "../init";

export const createContext = async (payload: {
  title: string;
  sections: unknown;
}) => {
  return await api({
    url: "/context",
    options: {
      method: "POST",
      body: JSON.stringify(payload),
    },
  });
};

export const getAllContext = async (): Promise<Context[]> => {
  return await api({ url: "/context" });
};
