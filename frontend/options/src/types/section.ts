export type SectionCreateTypes = "context" | "resume";

interface SectionField {
  id: string;
  title: string;
  value: string | null;
  name: "name" | "surname" | "email" | "age" | "github" | "linkedin"
}

export interface Section {
  id: string;
  title: string;
  fields: SectionField[];
  name: string
}
