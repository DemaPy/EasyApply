import { Title } from "@/components/atoms";
import { Template } from "@/types";

interface Props {
  template: Template;
}

export const TempalateCard = ({ template }: Props) => {
  return (
    <div>
      <Title>{template.title}</Title>
    </div>
  );
};
