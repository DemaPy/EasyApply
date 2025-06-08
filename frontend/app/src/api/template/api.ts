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

export const getAllContext = async () => {
  return await api({ url: "/context" });
};
