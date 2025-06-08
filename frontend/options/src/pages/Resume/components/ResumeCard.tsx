import { Title } from "@/components/atoms";
import { Resume } from "@/types";

interface Props {
  resume: Resume;
}

export const ResumeCard = ({ resume }: Props) => {
  return (
    <div>
      <Title>{resume.title}</Title>
    </div>
  );
};
