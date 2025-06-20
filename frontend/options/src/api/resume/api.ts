import { Resume } from "@/types";
import { api } from "../init";

interface Payload {
  title: string;
  context: string;
  template: string;
  jobDescription: string;
}

export const createResume = async (payload: Payload) => {
  return await api({
    url: "/resume",
    options: {
      method: "POST",
      body: JSON.stringify(payload),
    },
  });
};

export const getAllResumes = async (): Promise<Resume[]> => {
  return await api({ url: "/resume" });
};
