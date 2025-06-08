import { Section } from "@/types";

export const contextSections: Section[] = [
  {
    id: "1",
    title: "About me",
    name: "about",
    fields: [
      {
        id: "1",
        title: "name",
        value: "Slavek",
        name: "name",
      },
      {
        id: "2",
        title: "surname",
        value: "Dema",
        name: "surname",
      },
      {
        id: "3",
        title: "age",
        value: "20",
        name: "age",
      },
      {
        id: "4",
        title: "email",
        value: "test@mail.com",
        name: "email",
      },
    ],
  },
  {
    id: "2",
    title: "Socials",
    name: "socials",
    fields: [
      {
        id: "1",
        title: "Github",
        value: "https://github.com/DemaPy",
        name: "github",
      },
      {
        id: "2",
        title: "LinkedIn",
        value: "https://www.linkedin.com/in/viacheslavdemchenko/",
        name: "linkedin",
      },
    ],
  },
];
