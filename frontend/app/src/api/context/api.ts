import type { Template } from "@/types";

export const getAllTemplate = async (): Promise<Template[]> => {
  const templates: Template[] = [
    {
      id: "1",
      title: "Monix",
    },
    {
      id: "2",
      title: "Sonic",
    },
    {
      id: "3",
      title: "Vintage",
    },
    {
      id: "4",
      title: "Modern",
    },
    {
      id: "5",
      title: "Custom",
    },
  ];
  return new Promise((res) => {
    setTimeout(() => {
      res(templates);
    }, 2000);
  });
};
