import type { Resume as ResumeType } from "@/types";
import { FlexContainer, SeeMoreButton, ShortenTitle } from "../molecules";

interface Props {
  resume: ResumeType;
}

export const Resume = ({ resume }: Props) => {
  return (
    <FlexContainer className="rounded-md bg-neutral-50 px-3 py-2">
      <ShortenTitle className="text-md" title={resume.title} options={{ limit: 18 }} />
      <SeeMoreButton onClick={() => alert(JSON.stringify(resume))} />
    </FlexContainer>
  );
};
