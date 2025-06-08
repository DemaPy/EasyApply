import type { Template as TemplateType } from "@/types";
import { FlexContainer, SeeMoreButton, ShortenTitle } from "../molecules";

interface Props {
  template: TemplateType;
}

export const Template = ({ template }: Props) => {
  return (
    <FlexContainer className="rounded-md bg-neutral-50 px-3 py-2">
      <ShortenTitle
        className="text-md"
        title={template.title}
        options={{ limit: 18 }}
      />
      <SeeMoreButton onClick={() => alert("See more")} />
    </FlexContainer>
  );
};
